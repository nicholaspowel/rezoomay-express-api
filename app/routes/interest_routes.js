// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for interests
const Interest = require('../models/interest')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { interest: { title: '', text: 'foo' } } -> { interest: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /interests
router.get('/interests', requireToken, (req, res, next) => {
  Interest.find()
    .then(interests => {
      // `interests` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return interests.map(interest => interest.toObject())
    })
    // respond with status 200 and JSON of the interests
    .then(interests => res.status(200).json({ interests: interests }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /interests/5a7db6c74d55bc51bdf39793
router.get('/interests/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Interest.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "interest" JSON
    .then(interest => res.status(200).json({ interest: interest.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /interests
router.post('/interests', requireToken, (req, res, next) => {
  // set owner of new interest to be current user
  req.body.interest.owner = req.user.id

  Interest.create(req.body.interest)
    // respond to succesful `create` with status 201 and JSON of new "interest"
    .then(interest => {
      res.status(201).json({ interest: interest.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /interests/5a7db6c74d55bc51bdf39793
router.patch('/interests/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.interest.owner

  Interest.findById(req.params.id)
    .then(handle404)
    .then(interest => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, interest)

      // pass the result of Mongoose's `.update` to the next `.then`
      return interest.updateOne(req.body.interest)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /interests/5a7db6c74d55bc51bdf39793
router.delete('/interests/:id', requireToken, (req, res, next) => {
  Interest.findById(req.params.id)
    .then(handle404)
    .then(interest => {
      // throw an error if current user doesn't own `interest`
      requireOwnership(req, interest)
      // delete the interest ONLY IF the above didn't throw
      interest.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router

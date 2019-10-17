// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for binders
const Binder = require('../models/binder')

// this is a binder of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { binder: { title: '', text: 'foo' } } -> { binder: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /binders
router.get('/binders', requireToken, (req, res, next) => {
  Binder.find({owner: req.user._id})
    .then(binders => {
      // `binders` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return binders.map(binder => binder.toObject())
    })
    // respond with status 200 and JSON of the binders
    .then(binders => res.status(200).json({ binders: binders }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /binders/5a7db6c74d55bc51bdf39793
router.get('/binders/:id', requireToken, (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Binder.findById(req.params.id)
    .then(handle404)
    .then(binder => {
      requireOwnership(req, binder)
      return binder
    })
    // if `findById` is succesful, respond with 200 and "binder" JSON
    .then(binder => res.status(200).json({ binder: binder.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /binders
router.post('/binders', requireToken, (req, res, next) => {
  // set owner of new binder to be current user
  req.body.binder.owner = req.user.id

  Binder.create(req.body.binder)
    // respond to succesful `create` with status 201 and JSON of new "binder"
    .then(binder => {
      res.status(201).json({ binder: binder.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /binders/5a7db6c74d55bc51bdf39793
router.patch('/binders/:id', requireToken, removeBlanks, (req, res, next) => {
  // if the client attempts to change the `owner` property by including a new
  // owner, prevent that by deleting that key/value pair
  delete req.body.binder.owner

  Binder.findById(req.params.id)
    .then(handle404)
    .then(binder => {
      // pass the `req` object and the Mongoose record to `requireOwnership`
      // it will throw an error if the current user isn't the owner
      requireOwnership(req, binder)

      // pass the result of Mongoose's `.update` to the next `.then`
      return binder.set(req.body.binder).save()
    })
    // if that succeeded, return 204 and no JSON
    .then(binder => {
      res.status(200).json({ binder: binder.toObject() })
    })
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /binders/5a7db6c74d55bc51bdf39793
router.delete('/binders/:id', requireToken, (req, res, next) => {
  Binder.findById(req.params.id)
    .then(handle404)
    .then(binder => {
      // throw an error if current user doesn't own `binder`
      requireOwnership(req, binder)
      // delete the binder ONLY IF the above didn't throw
      binder.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router

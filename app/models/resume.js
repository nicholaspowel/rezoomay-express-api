const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const collectionSchema = require('./collection')

/*
{
    "resume": {
        "_id": "5da8c1a052ad091fdf8619fc",
        "title": "Test",
        "template": "DavidKo",
        "binder": "5da8c0d12a11ea1fd10ce0c1",
        "owner": "5da6367f15fbb2c8fc5c7e35",
        "createdAt": "2019-10-17T19:31:44.720Z",
        "updatedAt": "2019-10-17T19:31:44.720Z",
        "__v": 0
    }
}
*/

// This should take in a reference to a collection and a template description. Eventually it may take a template id.
// for now templates are stored on the front end, so it just needs a reference.

const resumeSchema = Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  template: {
    type: String,
    required: true
  },
  binder: {
    type: Schema.Types.ObjectId,
    ref: 'Collection',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Resume', resumeSchema)
// const Person = mongoose.model('Person', personSchema);

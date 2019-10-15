const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const collectionSchema = require('./collection')

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

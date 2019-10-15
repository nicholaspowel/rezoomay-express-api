const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questionSchema = require('./question')

// This is where users will store combined collections of other resume content.
// For instance, they may have a Teaching collection, a Software Engineer collection, etc

const collectionSchema = Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  questions: [questionSchema]
}, {
  timestamps: true
})

module.exports = mongoose.model('Collection', collectionSchema)
// const Person = mongoose.model('Person', personSchema);

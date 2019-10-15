const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const skillSchema = require('./skill')

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
  description: {
    type: String,
    required: true
  },
  profile: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
  summary: { type: mongoose.Schema.Types.ObjectId, ref: 'Summary' },
  work: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  interest: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interest' }],
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  educationList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Education' }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Collection', collectionSchema)
// const Person = mongoose.model('Person', personSchema);

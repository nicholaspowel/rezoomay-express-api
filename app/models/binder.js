const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const skillSchema = require('./skill')
/*
{
    "binder": {
        "jobs": [
            "5da89d98a03666183a185447"
        ],
        "interests": [
            "5da8a2b59c5e6f1ce869f518"
        ],
        "skills": [
            "5da873330b82c1118db84d92"
        ],
        "contacts": [
            "5da87cbf58fb4e1572baf902"
        ],
        "educationList": [
            "5da7963b4d64e7fa32dd9dbe",
            "5da7a40d4d64e7fa32dd9dc3"
        ],
        "projects": [
            "5da8b3b369b9471dd43e8f8c"
        ],
        "_id": "5da8c0d12a11ea1fd10ce0c1",
        "title": "General Frontend Binder",
        "description": "This binder is generic for applying to Front end Positions",
        "profile": "5da8a768a7d1211d14d0fd06",
        "summary": "5da8bc0af0a1421ec82e21fe",
        "owner": "5da6367f15fbb2c8fc5c7e35",
        "createdAt": "2019-10-17T19:28:17.387Z",
        "updatedAt": "2019-10-17T19:28:17.387Z",
        "__v": 0
    }
}
*/
// This is where users will store combined collections of other resume content.
// For instance, they may have a Teaching collection, a Software Engineer collection, etc

const binderSchema = Schema({
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
  jobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  interests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Interest' }],
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
  educationList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Education' }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Binder', binderSchema)
// const Person = mongoose.model('Person', personSchema);

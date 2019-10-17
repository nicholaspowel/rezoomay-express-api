const mongoose = require('mongoose')

/*
{
{
title: 'StackOverKo',
summary: 'A question-response website for developers',
skills: 'JavaScript HTML CSS Ruby React.js Rails PostgreSQL Axios',
deployed: 'https://davidholyko.github.io/dko-stackoverko-client',
repo: 'https://github.com/davidholyko/dko-stackoverko-client',
description: [
  'Launched a open forum website that helps developers find specific answers',
  'Built Front End with React.js to emphasize modularity and boost performance',
  'Spearheaded a complex API that utilizes numerous one to many relationships and serializes nested associations',
  'Incorporated various open-source Node packages such as Markdown.js, Prism.js, Bootstrap'
]
}
{
    "project": {
        "skills": [
            "5da8736a0b82c1118db84d93",
            "5da874b37d854013c2363067",
            "5da874d77d854013c2363068",
            "5da8750b7d854013c2363069"
        ],
        "_id": "5da8b46369b9471dd43e8f8d",
        "title": "Resume-Clips short",
        "projectTitle": "Resume-Clips",
        "startDate": "2005-06-01T00:00:00.000Z",
        "endDate": "2013-05-15T00:00:00.000Z",
        "company": "",
        "summary": "An app for organizing resume content",
        "location": {
            "city": "Boston",
            "state": "MA",
            "country": "USA"
        },
        "description": "Full time 500+ Web Development Immersive Program\n Developed four Full Stack web applications using JavaScript, HTML, CSS, and Ruby\n Collaborated with a team using Agile methodology and Scrum principles",
        "deployedUrl": "",
        "repoUrl": "",
        "imageUrl": "",
        "owner": "5da6367f15fbb2c8fc5c7e35",
        "createdAt": "2019-10-17T18:35:15.731Z",
        "updatedAt": "2019-10-17T18:35:15.731Z",
        "__v": 0
    }
}
*/
// TODO: more closely match LinkedIn models
// TODO: add preview images?

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  projectTitle: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  summary: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: Date,
  endDate: Date,
  deployedUrl: String,
  repoUrl: String,
  imageUrl: String,
  location: {
    city: String,
    state: String,
    country: String
  },
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)

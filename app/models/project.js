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
*/
// TODO: Break the location in to City, State, and Country
// TODO: more closely match LinkedIn models

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: Date,
  endDate: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Job', educationSchema)

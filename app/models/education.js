const mongoose = require('mongoose')

/*
{
  date: 'Sept 2013 - Sept 2015',
  school: 'UMass Amherst',
  concentration: 'Operations Information Management',
  location: 'Amherst, MA',
  coursework: true,
  description: [
    'Computer Science: Intro to Java, Data Structures, Game Design, Data Science',
    'Information Technology: Computer Literacy, Problem Solving with Internet',
    'Mathematics: Calculus I, Calculus II, Statistics',
    'Operations: Business Information Systems, Business Intelligence & Analytics',
    'Business: Law, Accounting, Finance, Marketing, Management'
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

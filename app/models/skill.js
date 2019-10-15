const mongoose = require('mongoose')
// this model covers languages, skills and technologies
/*
const languages = [
  {
    icon: 'devicon-javascript-plain colored',
    value: 'JavaScript'
  },
  {
    icon: 'devicon-html5-plain colored',
    value: 'HTML'
  },
  {
    icon: 'devicon-css3-plain colored',
    value: 'CSS'
  },
  {
    icon: 'devicon-ruby-plain colored',
    value: 'Ruby'
  },
  {
    icon: 'devicon-python-plain colored',
    value: 'Python'
  },
  {
    icon: 'devicon-java-plain colored',
    value: 'Java'
  }
]
//subType = 'technology', 'language', library
*/

// subType covers if it is a library, language or technology.
// may need to be turned into an array
const skillSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  subType: {
    type: String
    // required: true
  },
  icon: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Skill', skillSchema)

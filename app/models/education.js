const mongoose = require('mongoose')

/*
{
  "education": {
  "title": "General Assembly",
  "startDate": {
    "month": "Jan",
    "year": 2019
    },
    "endDate": {
      "month": "Apr",
      "year": 2019
    },
    "school": "General Assembly",
    "concentration": "Full Stack Web Development",
    "location": {
      "city": "Boston",
      "state": "MA",
      "country": "USA"
    },
    "description": [
      "Full time 500+ hour Web Development Immersive Program",
      "Developed four Full Stack web applications using JavaScript, HTML, CSS, and Ruby",
      "Collaborated with a team using Agile methodology and Scrum principles"
    ]
  }
}
*/
// TODO: Break the location in to City, State, and Country
// TODO: more closely match LinkedIn models
// TODO: break coursework into field and course?

const educationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  concentration: {
    type: String,
    required: true
  },
  location: {
    city: {
      type: String,
      required: true
    },
    state: String,
    country: {
      type: String,
      required: true
    }
  },
  description: {
    type: String,
    required: true
  },
  coursework: {
    type: String
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

module.exports = mongoose.model('Education', educationSchema)

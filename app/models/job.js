const mongoose = require('mongoose')

/*
{
    "job": {
        "_id": "5da89d98a03666183a185447",
        "title": "GA work",
        "startDate": "1976-04-19T17:59:00.000Z",
        "endDate": "1976-04-19T17:59:00.000Z",
        "company": "General Assembly",
        "position": "Full Stack Engineer",
        "location": {
            "city": "Boston",
            "state": "MA",
            "country": "USA"
        },
        "description": "Full time 500+ Web Development Immersive Program\n Developed four Full Stack web applications using JavaScript, HTML, CSS, and Ruby\n Collaborated with a team using Agile methodology and Scrum principles",
        "owner": "5da6367f15fbb2c8fc5c7e35",
        "createdAt": "2019-10-17T16:58:00.057Z",
        "updatedAt": "2019-10-17T16:58:00.057Z",
        "__v": 0
    }
}
*/
// TODO: Allow for multiple locations
// TODO: more closely match LinkedIn models

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  position: {
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

module.exports = mongoose.model('Job', jobSchema)

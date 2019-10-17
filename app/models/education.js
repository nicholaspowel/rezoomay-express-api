const mongoose = require('mongoose')

/*
{
            "location": {
                "city": "New York City",
                "state": "NY",
                "country": "United States"
            },
            "_id": "5da7a40d4d64e7fa32dd9dc3",
            "description": "Studied a range of fields, from Bronze Casting to Biomedical Devices and Robotics",
            "coursework": "",
            "title": "Cooper Union",
            "startDate": "2005-06-01T00:00:00.000Z",
            "endDate": "2013-05-15T00:00:00.000Z",
            "school": "Cooper Union For The Advancement of Art and Science",
            "concentration": "Interdisciplinary Engineering",
            "owner": "5da6367f15fbb2c8fc5c7e35",
            "createdAt": "2019-10-16T23:13:17.123Z",
            "updatedAt": "2019-10-17T17:26:04.663Z",
            "__v": 0
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

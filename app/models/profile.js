const mongoose = require('mongoose')

/*
{
    "profile": {
        "_id": "5da8a768a7d1211d14d0fd06",
        "title": "GA",
        "name": {
            "first": "John Nicholas",
            "middle": "Ives",
            "last": "Powel"
        },
        "imageUrl": "",
        "location": {
            "city": "Boston",
            "state": "MA",
            "country": "USA"
        },
        "owner": "5da6367f15fbb2c8fc5c7e35",
        "createdAt": "2019-10-17T17:39:52.077Z",
        "updatedAt": "2019-10-17T17:39:52.077Z",
        "__v": 0
    }
}
*/
// TODO: add ability to have a profile picture
const profileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  name: {
    first: {
      type: String,
      required: true
    },
    middle: String,
    last: {
      type: String,
      required: true
    }
  },
  location: {
    city: {
      type: String,
      required: true
    },
    state: String,
    country: String
  },
  imageUrl: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Profile', profileSchema)

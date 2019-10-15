const mongoose = require('mongoose')

/*
const interests = [
  {
    icon: 'cooking',
    value: 'Cooking'
  },
  {
    icon: 'football',
    value: 'NFL'
  },
  {
    icon: 'smite',
    value: 'Smite'
  },
  {
    icon: 'warhammer',
    value: 'Warhammer 2'
  },
  {
    icon: 'catan',
    value: 'Catan'
  }
]

iconLink gives a links to a stored icon file
interestUrl gives a link to where people can find out more
*/
// TODO: for icons to work with Interests, really need the ability to upload images

const interestSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true
  },
  icon: {
    type: String
  },
  iconLink: String,
  interestUrl: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Interest', interestSchema)

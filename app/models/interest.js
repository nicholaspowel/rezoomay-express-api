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
*/

const interestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Interest', interestSchema)

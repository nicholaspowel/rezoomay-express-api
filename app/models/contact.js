const mongoose = require('mongoose')

/*
const contacts = [
  {
    type: 'Gmail',
    icon: 'gmail',
    value: 'david.holy.ko'
  },
  {
    type: 'Github',
    icon: 'github',
    value: 'davidholyko'
  },
  {
    type: 'LinkedIn',
    icon: 'linkedin',
    value: 'davidhko1'
  },
  {
    type: 'Portfolio',
    icon: 'portfolio',
    value: 'davidholyko.github.io'
  }
]
*/

const contactSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  icon: String,
  value: {
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

module.exports = mongoose.model('Contact', contactSchema)

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

{
    "contact": {
        "_id": "5da8a0c3ee22fa1cdd6c140f",
        "value": "nicholaspowel.github.io",
        "method": "Portfolio",
        "icon": "portfolio",
        "owner": "5da6367f15fbb2c8fc5c7e35",
        "createdAt": "2019-10-17T17:11:31.901Z",
        "updatedAt": "2019-10-17T17:11:31.901Z",
        "__v": 0
    }
}
*/

const contactSchema = new mongoose.Schema({
  method: {
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

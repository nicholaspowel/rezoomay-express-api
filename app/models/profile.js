const mongoose = require('mongoose')

/*
const summary = 'I am a software engineer focusing in web development. My passion for continuous improvement and teamwork helps me create applications that are usable, functional, and modular.'
const InfoHeader = () => (
  <div id="info-header">
    <h1 className="name">David Ko</h1>
    <h4 className="title">Software Engineer</h4>
    <h4 className="title">Boston, MA</h4>
  </div>
)
*/
// TODO: add ability to have a profile picture
const profileSchema = new mongoose.Schema({
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

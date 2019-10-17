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
// TODO: embed multiple summaries, of different lengths?

const summarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  position: {
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

module.exports = mongoose.model('Summary', summarySchema)

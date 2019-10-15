const mongoose = require('mongoose')

/*
{
  date: 'Oct 2018 - Jan 2019',
  company: 'Roche Bros Supermarket',
  title: 'Deli Clerk',
  location: 'Boston, MA'
}
*/
// TODO: Break the location in to City, State, and Country
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
  location: {
    type: String,
    required: true
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

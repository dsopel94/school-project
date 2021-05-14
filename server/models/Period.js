const mongoose = require('mongoose');

const PeriodSchema = mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  course: { type: Schema.Types.ObjectId, ref: 'Course'},
  students: [{type: Schema.Types.ObjectId, ref: 'Student'}]
})

module.exports = Period;

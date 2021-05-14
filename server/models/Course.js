const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
  name: String,
  periods: {type: Schema.Types.ObjectId, ref: 'Period'},
  students: [{type: Schema.Types.ObjectId, ref: Student}]
})

const Student = mongoose.model('Period', PeriodSchema);

module.exports = Period;

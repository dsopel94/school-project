import mongoose from 'mongoose';
import Student from './Student.js';

const PeriodSchema = mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course'},
  students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
})

const Period = mongoose.model("Period", PeriodSchema);

export default Period;

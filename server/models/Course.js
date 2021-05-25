import mongoose from 'mongoose';
import Period from './Period.js';
import Student from './Student.js'

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  periods: [{type: mongoose.Schema.Types.ObjectId, ref: Period}],
  students: [{type: mongoose.Schema.Types.ObjectId, ref: Student}]
})

const Course = mongoose.model('Course', CourseSchema);

export default Course;

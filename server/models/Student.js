import mongoose from 'mongoose';
import Assignment from './Assignment.js';
import Course from './Course.js'

const StudentSchema = mongoose.Schema({
  name: String,
  phoneNumber: String,
  address: String,
  assignments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Assignment'}],
  courses: [{type: mongoose.Schema.Types.ObjectId, ref: 'Course'}]
})

const Student = mongoose.model('Student', StudentSchema);

export default Student;

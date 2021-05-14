const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  name: String,
  phoneNumber: String,
  address: String,
  assignments: [{type: Schema.Types.ObjectId, ref: 'Assignment'}],
  courses: [{type: Schema.Types.ObjectId, ref: 'Course'}]
})


module.exports = Student;

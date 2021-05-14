const mongoose = require('mongoose');

const AssignmentSchema = mongoose.Schema({
  name: String,
  studentPoints: Number,
  totalPoints: Number
})

const Assignment = mongoose.model('Assignment', AssignmentSchema);

module.exports = Assignment;

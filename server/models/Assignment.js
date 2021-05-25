import mongoose from 'mongoose';

const AssignmentSchema = mongoose.Schema({
  name: String,
  studentPoints: Number,
  totalPoints: Number
})

const Assignment = mongoose.model('Assignment', AssignmentSchema);

export default Assignment;

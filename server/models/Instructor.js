const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const InstructorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

InstructorSchema.pre('save', function(next) {
  if(!this.isModified('password'))
    return next;
  bcrypt.hash(this.password, 10, (err, passwordHash) => {
    if(err)
      return next(err);
    this.password = passwordHash'
    next();
  })
})

InstructorSchema.methods.comparePassword = function(password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if(err)
      return cb(err);
    else {
      if(!isMatch)
        return cb(null, isMatch)
      return cb(null, this);
    }
  })
}

const Instructor = mongoose.model('Instructor', InstructorSchema);

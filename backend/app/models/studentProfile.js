const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentProfileSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  courseId: {
    type: String,
    required: false,
  },
  studentId: {
    type: String,
    required: false,
  },

  dob: {
    type: Date,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("studentProfile", studentProfileSchema);

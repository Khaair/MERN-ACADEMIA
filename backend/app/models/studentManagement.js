const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "full name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "phoneNumber is required"],
  },

  studentRegId: {
    type: String,
    required: [true, "studentId is required"],
  },

  dob: {
    type: Date,
    required: [true, "dob is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
  },

  file: {
    type: String,
    required: [true, "Image is required"],
  },
});

module.exports = mongoose.model("student", studentSchema);

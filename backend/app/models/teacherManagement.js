const mongoose = require("mongoose");
const { Schema } = mongoose;
const teacherSchema = new Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "phoneNumber is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  gender: {
    type: String,
    required: [true, "gender is required"],
  },

  address: {
    type: String,
    required: [true, "address is required"],
  },
  subject: {
    type: String,
    required: [true, "subject is required"],
  },
  qualifications: {
    type: String,
    required: [true, "qualifications is required"],
  },
  designation: {
    type: String,
    required: [true, "designation is required"],
  },

  teacherRegId: {
    type: String,
    required: [true, "teacherId is required"],
  },
  salary: {
    type: String,
    required: [true, "teacherId is required"],
  },
  file: {
    type: String,
    required: [true, "image is required"],
  },
});

module.exports = mongoose.model("teacher", teacherSchema);

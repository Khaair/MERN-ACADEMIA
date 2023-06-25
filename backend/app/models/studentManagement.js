const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
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
  courseId: {
    type: String,
    required: [true, "courseId is required"],
  },
  studentId: {
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

studentSchema.path("name").validate(function (value) {
  return value.length <= 100;
}, "name length should be less than or equal to 100 characters");

studentSchema.path("email").validate(function (value) {
  return value.length <= 1000;
}, "email length should be less than or equal to 1000 characters");

studentSchema.path("phoneNumber").validate(function (value) {
  return value.length <= 50;
}, "Author length should be less than or equal to 50 characters");

studentSchema.path("courseId").validate(function (value) {
  return value.length <= 50;
}, "courseId length should be less than or equal to 50 characters");

studentSchema.path("studentId").validate(function (value) {
  return value.length <= 50;
}, "studentId length should be less than or equal to 50 characters");

studentSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("student", studentSchema);

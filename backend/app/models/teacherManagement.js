const mongoose = require("mongoose");
const { Schema } = mongoose;
//teacherId,name,email,phoneNumber,address,subject,qualifications,designation
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
  teacherId: {
    type: String,
    required: [true, "teacherId is required"],
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
  file: {
    type: String,
    required: [true, "image is required"],
  },
});

teacherSchema.path("name").validate(function (value) {
  return value.length <= 100;
}, "name length should be less than or equal to 100 characters");

teacherSchema.path("email").validate(function (value) {
  return value.length <= 1000;
}, "email length should be less than or equal to 1000 characters");

teacherSchema.path("phoneNumber").validate(function (value) {
  return value.length <= 50;
}, "Author length should be less than or equal to 50 characters");

teacherSchema.path("teacherId").validate(function (value) {
  return value.length <= 50;
}, "teacherId length should be less than or equal to 50 characters");

teacherSchema.path("address").validate(function (value) {
  return value.length <= 50;
}, "address length should be less than or equal to 50 characters");

teacherSchema.path("subject").validate(function (value) {
  return value.length <= 50;
}, "subject length should be less than or equal to 50 characters");

teacherSchema.path("qualifications").validate(function (value) {
  return value.length <= 50;
}, "qualifications length should be less than or equal to 50 characters");

teacherSchema.path("designation").validate(function (value) {
  return value.length <= 50;
}, "designation length should be less than or equal to 50 characters");

teacherSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("teacher", teacherSchema);

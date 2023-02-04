const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentManageSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Full name is required"],
  },
  dob: {
    type: Date,
    required: [true, "Date of Birth is required"],
  },
  religion: {
    type: String,
    required: [true, "Religion is required"],
  },
  section: {
    type: String,
    required: [true, "Section is required"],
  },
  roll: {
    type: Number,
    required: [true, "Roll number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  admissionId: {
    type: String,
    required: [true, "Admission ID is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  bloodGroup: {
    type: String,
    required: [true, "Blood group is required"],
  },
  classNo: {
    type: Number,
    required: [true, "Class number is required"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
  },
  file: {
    type: String,
    required: [false, "Image is required"],
  },
});

studentManageSchema.path("fullname").validate(function (value) {
  return value.length <= 50;
}, "fullname length should be less than or equal to 50 characters");

studentManageSchema.path("dob").validate(function (value) {
  return value.length <= 50;
}, "dob length should be less than or equal to 50 characters");

studentManageSchema.path("religion").validate(function (value) {
  return value.length <= 1000;
}, "religion length should be less than or equal to 1000 characters");
studentManageSchema.path("section").validate(function (value) {
  return value.length <= 100;
}, "section length should be less than or equal to 100 characters");

studentManageSchema.path("roll").validate(function (value) {
  return value.length <= 50;
}, "roll length should be less than or equal to 50 characters");

studentManageSchema.path("email").validate(function (value) {
  return value.length <= 1000;
}, "email length should be less than or equal to 1000 characters");
studentManageSchema.path("admissionId").validate(function (value) {
  return value.length <= 100;
}, "admissionId length should be less than or equal to 100 characters");

studentManageSchema.path("gender").validate(function (value) {
  return value.length <= 50;
}, "gender length should be less than or equal to 50 characters");

studentManageSchema.path("bloodGroup").validate(function (value) {
  return value.length <= 1000;
}, "bloodGroup length should be less than or equal to 1000 characters");

studentManageSchema.path("classNo").validate(function (value) {
  return value.length <= 1000;
}, "classNo length should be less than or equal to 1000 characters");

studentManageSchema.path("file").validate(function (value) {
  return value.length <= 1000;
}, "file length should be less than or equal to 1000 characters");

studentManageSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("studentManage", studentManageSchema);

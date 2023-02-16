const mongoose = require("mongoose");
const { Schema } = mongoose;

const crudSchema = new Schema({
  name: {
    type: String,
    required: [true, "Title is required"],
  },
  email: {
    type: String,
    required: [true, "Title is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Author is required"],
  },
  courseId: {
    type: String,
    required: [true, "Body is required"],
  },
  studentId: {
    type: String,
    required: [true, "Body is required"],
  },
  file: {
    type: String,
    required: [true, "Image is required"],
  },
});

crudSchema.path("name").validate(function (value) {
  return value.length <= 100;
}, "name length should be less than or equal to 100 characters");

crudSchema.path("email").validate(function (value) {
  return value.length <= 1000;
}, "email length should be less than or equal to 1000 characters");

crudSchema.path("phoneNumber").validate(function (value) {
  return value.length <= 50;
}, "Author length should be less than or equal to 50 characters");

crudSchema.path("courseId").validate(function (value) {
  return value.length <= 50;
}, "courseId length should be less than or equal to 50 characters");

crudSchema.path("studentId").validate(function (value) {
  return value.length <= 50;
}, "studentId length should be less than or equal to 50 characters");

crudSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("crud", crudSchema);

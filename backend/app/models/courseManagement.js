const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseManagementSchema = new Schema({
  courseTitle: {
    type: String,
    required: [true, "courseTitle is required"],
  },
  courseSubTitle: {
    type: String,
    required: [true, "courseSubTitle is required"],
  },
  price: {
    type: String,
    required: [true, "price is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  instructorName: {
    type: String,
    required: [true, "instructorName is required"],
  },
  instructorDesignation: {
    type: String,
    required: [true, "instructorDesignation is required"],
  },
  learnFromCourse: {
    type: String,
    required: [true, "learnFromCourse is required"],
  },
  courseContent: {
    type: String,
    required: [true, "courseContent is required"],
  },
  file: {
    type: String,
    required: [true, "Image is required"],
  },
});

courseManagementSchema.path("courseTitle").validate(function (value) {
  return value.length <= 1000;
}, "courseTitle length should be less than or equal to 100 characters");
courseManagementSchema.path("courseSubTitle").validate(function (value) {
  return value.length <= 1000;
}, "courseSubTitle length should be less than or equal to 100 characters");
courseManagementSchema.path("price").validate(function (value) {
  return value.length <= 1000;
}, "price length should be less than or equal to 100 characters");

courseManagementSchema.path("description").validate(function (value) {
  return value.length <= 1000;
}, "description length should be less than or equal to 50 characters");

courseManagementSchema.path("instructorName").validate(function (value) {
  return value.length <= 1000;
}, "instructorName length should be less than or equal to 1000 characters");
courseManagementSchema.path("instructorDesignation").validate(function (value) {
  return value.length <= 1000;
}, "instructorDesignation length should be less than or equal to 1000 characters");

courseManagementSchema.path("learnFromCourse").validate(function (value) {
  return value.length <= 1000;
}, "learnFromCourse length should be less than or equal to 1000 characters");

courseManagementSchema.path("courseContent").validate(function (value) {
  return value.length <= 1000;
}, "courseContent length should be less than or equal to 1000 characters");

courseManagementSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("courseManagement", courseManagementSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseContentSchema = new Schema({
  title: {
    type: String,
    required: [true, "course content title is required"],
  },
  description: {
    type: String,
    required: [true, "course content description is required"],
  },
});

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
    type: [courseContentSchema],
    required: false, // Set to true if about is required, otherwise false
  },
  file: {
    type: String,
    required: [true, "Image is required"],
  },
});

module.exports = mongoose.model("courseManagement", courseManagementSchema);

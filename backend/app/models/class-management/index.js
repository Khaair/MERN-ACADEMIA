const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentListSchema = new Schema({
  studentRegId: {
    type: String,
    required: [true, "course content title is required"],
  },
  studentName: {
    type: String,
    required: [true, "course content description is required"],
  },
});

const classManagementSchema = new Schema({
  className: {
    type: String,
    required: [true, "class name is required"],
  },
  section: {
    type: String,
    required: [true, "courseSubTitle is required"],
  },
  teacherName: {
    type: String,
    required: [true, "price is required"],
  },
  subjectName: {
    type: String,
    required: [true, "description is required"],
  },
  studentList: {
    type: [studentListSchema],
    required: false,
  },
});

module.exports = mongoose.model("classManagement", classManagementSchema);

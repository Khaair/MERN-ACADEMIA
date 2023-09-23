const mongoose = require("mongoose");
const { Schema } = mongoose;

const attendanceSchema = new Schema({
  studentRegId: {
    type: String,
    required: [true, "StudentRegId is required"],
  },
  studentName: {
    type: String,
    required: [true, "studentName is required"],
  },
});

const classManagementSchema = new Schema({
  date: {
    type: Date,
    required: [true, "date is required"],
  },
  classId: {
    type: String,
    required: [true, "classId is required"],
  },

  className: {
    type: String,
    required: [true, "classId is required"],
  },
  section: {
    type: String,
    required: [true, "classId is required"],
  },

  attendedStudentList: {
    type: [attendanceSchema],
    required: false,
  },
});

module.exports = mongoose.model("attendanceManagement", classManagementSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const resultSchema = new Schema({
  studentName: {
    type: String,
    required: [true, "question is required"],
  },

  rollNumber: {
    type: String,
    required: [true, "question is required"],
  },

  examName: {
    type: String,
    required: [true, "question is required"],
  },

  passingYear: {
    type: String,
    required: [true, "answer is required"],
  },

  subjectAndMarks: {
    type: [String],
    required: [true, "subject and marks is required"],
  },
});

module.exports = mongoose.model("result", resultSchema);

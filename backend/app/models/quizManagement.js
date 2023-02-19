const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = new Schema({
  question: {
    type: String,
    required: [true, "question is required"],
  },
  options: {
    type: [String],
    required: [true, "options is required"],
  },

  answer: {
    type: String,
    required: [true, "answer is required"],
  },
});

module.exports = mongoose.model("quiz", quizSchema);

const mongoose = require("mongoose");
const { Schema } = mongoose;

const speechSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  file: {
    type: String,
    required: [true, "image is required"],
  },
});

module.exports = mongoose.model("speech", speechSchema);

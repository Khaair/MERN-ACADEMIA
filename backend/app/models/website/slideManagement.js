const mongoose = require("mongoose");
const { Schema } = mongoose;

const SlideSchema = new Schema({
  topTitle: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  subTitle: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: [true, "Image is required"],
  },
});

module.exports = mongoose.model("slide", SlideSchema);

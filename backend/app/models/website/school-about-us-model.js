const mongoose = require("mongoose");
const { Schema } = mongoose;

const aboutUsSchema = new Schema({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("aboutUs", aboutUsSchema);

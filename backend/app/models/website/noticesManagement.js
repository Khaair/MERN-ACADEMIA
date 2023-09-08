const mongoose = require("mongoose");
const { Schema } = mongoose;

const noticesSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  noticesTitle: {
    type: String,
    required: true,
  },

  file: {
    type: String,
    required: [true, "file is required"],
  },
});

module.exports = mongoose.model("notices", noticesSchema);

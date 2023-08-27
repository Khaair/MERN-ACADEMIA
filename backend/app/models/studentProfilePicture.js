const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentProfilePictureSchema = new Schema({
  studentId: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model(
  "studentProfilePicture",
  studentProfilePictureSchema
);

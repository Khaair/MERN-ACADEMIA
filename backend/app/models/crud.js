const mongoose = require("mongoose");
const { Schema } = mongoose;

const crudSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Title is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Author is required"],
  },
  address: {
    type: String,
    required: [true, "Body is required"],
  },
  file: {
    type: String,
    required: [true, "Image is required"],
  },
});

crudSchema.path("fullName").validate(function (value) {
  return value.length <= 100;
}, "Title length should be less than or equal to 100 characters");

crudSchema.path("phoneNumber").validate(function (value) {
  return value.length <= 50;
}, "Author length should be less than or equal to 50 characters");

crudSchema.path("address").validate(function (value) {
  return value.length <= 1000;
}, "Body length should be less than or equal to 1000 characters");

crudSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("crud", crudSchema);

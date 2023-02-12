const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseOrderSchema = new Schema({
  orderId: {
    type: String,
    required: [true, "orderId is required"],
  },
  courseId: {
    type: String,
    required: [true, "courseId is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "phoneNumber is required"],
  },
  transactionId: {
    type: String,
    required: [true, "transactionId is required"],
  },
});

courseOrderSchema.path("orderId").validate(function (value) {
  return value.length <= 1000;
}, "orderId length should be less than or equal to 100 characters");

courseOrderSchema.path("courseId").validate(function (value) {
  return value.length <= 1000;
}, "courseId length should be less than or equal to 50 characters");

courseOrderSchema.path("email").validate(function (value) {
  return value.length <= 1000;
}, "email length should be less than or equal to 1000 characters");

courseOrderSchema.path("phoneNumber").validate(function (value) {
  return value.length <= 1000;
}, "phoneNumber length should be less than or equal to 1000 characters");

courseOrderSchema.path("transactionId").validate(function (value) {
  return value.length <= 1000;
}, "transactionId length should be less than or equal to 1000 characters");

courseOrderSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("crud", courseOrderSchema);

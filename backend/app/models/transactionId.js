const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionIdSchema = new Schema({
  transactionId: {
    type: String,
    required: [true, "transactionId is required"],
  },
});

transactionIdSchema.path("transactionId").validate(function (value) {
  return value.length <= 1000;
}, "transactionId length should be less than or equal to 1000 characters");

transactionIdSchema.post("save", function (error, doc, next) {
  if (error.name === "ValidationError") {
    next(new Error(error.message));
  } else {
    next();
  }
});

module.exports = mongoose.model("transactionId", transactionIdSchema);

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

module.exports = mongoose.model("courseOrder", courseOrderSchema);

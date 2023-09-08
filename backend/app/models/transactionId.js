const mongoose = require("mongoose");
const { Schema } = mongoose;

const transactionIdSchema = new Schema({
  transactionId: {
    type: String,
    required: [true, "transactionId is required"],
  },
});

module.exports = mongoose.model("transactionId", transactionIdSchema);

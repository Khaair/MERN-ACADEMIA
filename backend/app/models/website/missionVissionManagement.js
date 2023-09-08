const mongoose = require("mongoose");
const { Schema } = mongoose;

const missionVissionSchema = new Schema({
  mission: {
    type: String,
    required: true,
  },
  vission: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("missionvission", missionVissionSchema);

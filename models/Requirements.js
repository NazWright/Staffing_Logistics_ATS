const mongoose = require("mongoose");
const { Schema } = mongoose;

const requirementsSchema = new Schema({
  jobId: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
    required: true,
  },
});

const Requirements = mongoose.model("requirements", requirementsSchema);
module.exports = Requirements;

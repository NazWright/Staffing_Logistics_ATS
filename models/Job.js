const mongoose = require("mongoose");
const { Schema } = mongoose;

const JobSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  companyId: {
    type: String,
    required: true,
  },
  googleJobName: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("jobs", JobSchema);
module.exports = Job;

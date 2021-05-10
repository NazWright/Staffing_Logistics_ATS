const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicationSchema = new Schema({
  job_id: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
    required: true,
  },
  applicantId: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  preferences: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "preferences",
  },
  policySignatures: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "signatures",
  },
  references: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "references",
  },
  emergencyContact: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "emergency_contacts",
  },
  personalInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "personal_information",
  },
  backgroundCheck: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "background_checks",
  },
});

const Application = mongoose.model("applications", applicationSchema);
module.exports = Application;

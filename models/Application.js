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
  policies: {
    type: Object,
    required: false,
  },
  preferences: {
    type: Object,
    required: false,
  },
});

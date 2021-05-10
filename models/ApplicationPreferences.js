const mongoose = require("mongoose");
const { Schema } = mongoose;

const preferencesSchema = new Schema({
  applicationId: {
    type: String,
    required: true,
  },
  givenName: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  employmentType: {
    type: String,
    required: true,
  },
  startOfWork: {
    type: Date,
    required: true,
  },
  preferredShift: {
    type: String,
    required: false,
  },
  availability: {
    type: [String],
    required: true,
  },
  eightTo12HrShifts: {
    type: Boolean,
    required: true,
  },
  transportationType: {
    type: String,
    required: true,
  },
  geoArea: {
    type: String,
    required: false,
  },
  companyDepartureReason: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: false,
  },
});

const Preferences = mongoose.model("preferences", preferencesSchema);
module.exports = Preferences;

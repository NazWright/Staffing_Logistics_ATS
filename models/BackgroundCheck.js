const mongoose = require("mongoose");
const { Schema } = mongoose;

const backgroundCheckSchema = new Schema({
  applicationId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  givenName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  familyName: {
    type: String,
    required: true,
  },
  socialSecurityNum: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  driversLicenseNum: {
    type: String,
    required: true,
  },
  driversLicenseState: {
    type: String,
    requird: true,
  },
  gender: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  prevCities: {
    type: Array,
    required: true,
  },
  hasCrime: {
    type: Boolean,
    required: true,
  },
  //   needs schema
  crimes: {
    type: [Object],
    required: false,
  },
  //   needs schema
  backgroundSignature: {
    type: Object,
    required: true,
  },
});

const BackgroundCheck = mongoose.model(
  "background_checks",
  backgroundCheckSchema
);
module.exports = BackgroundCheck;

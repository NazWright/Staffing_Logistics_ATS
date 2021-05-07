const mongoose = require("mongoose");
const { Schema } = mongoose;

const emergencyContactSchema = new Schema({
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
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  secPhone: {
    type: String,
    requird: true,
  },
  email: {
    type: String,
    required: true,
  },
  relationshipToUser: {
    type: String,
    required: true,
  },
});

const EmergencyContact = mongoose.model(
  "emergency_contacts",
  emergencyContactSchema
);
module.exports = EmergencyContact;

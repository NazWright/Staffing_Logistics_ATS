const mongoose = require("mongoose");
const { Schema } = mongoose;

const personalInfoSchema = new Schema({
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
    required: true,
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
});

const PersonalInfo = mongoose.model("personal_information", personalInfoSchema);
module.exports = PersonalInfo;

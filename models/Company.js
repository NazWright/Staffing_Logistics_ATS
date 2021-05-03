const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  googleCompanyName: {
    type: String,
    required: true,
  },
  employerId: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model("companies", companySchema);
module.exports = Company;

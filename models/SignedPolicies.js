const mongoose = require("mongoose");
const { Schema } = mongoose;

const signedSchema = new Schema({
  userId: String,
  applicationId: String,
  policies_signed: [Object],
});

const signedPolicy = mongoose.model("signatures", signedSchema);
module.exports = signedPolicy;

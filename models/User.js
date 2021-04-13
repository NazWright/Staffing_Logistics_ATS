const mongoose = require("mongoose");
const { Schema } = mongoose;
const PointSchema = require("./Point");
const roleSchema = require("./Role");

const userSchema = new Schema({
  googleId: {
    type: String,
    required: false,
  },
  familyName: {
    type: String,
    required: [true, "First Name is required."],
  },
  givenName: {
    type: String,
    required: [true, "Last Name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
  },
  password: {
    type: String,
    required: false,
  },
  role: roleSchema,
  isAdmin: {
    type: Boolean,
    required: [true, "Admin capabilities must be specified."],
  },
  parent: {
    type: String,
    required: false,
  },
  cust_Id: {
    type: String,
    required: false,
  },
  subscription: {
    type: Object,
    required: false,
  },
  accounts: {
    type: Number,
    required: false,
  },
});

const User = mongoose.model("users", userSchema);
module.exports = User;

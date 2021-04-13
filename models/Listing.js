const mongoose = require("mongoose");
const { Schema } = mongoose;
const PointSchema = require("./Point");

const ListingSchema = new Schema({
  publisher_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  compensation: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
});

const Listing = mongoose.model("listings", ListingSchema);
module.exports = Listing;

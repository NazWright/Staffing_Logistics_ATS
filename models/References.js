const mongoose = require("mongoose");
const { Schema } = mongoose;

const referenceSchema = new Schema({
  applicationId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  // needs a schema
  references: {
    type: [Object],
    required: true,
  },
});

const Reference = mongoose.model("references", referenceSchema);
module.exports = Reference;

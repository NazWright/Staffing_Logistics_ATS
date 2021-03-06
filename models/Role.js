const mongoose = require("mongoose");
const { Schema } = mongoose;

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  caps: {
    type: [String],
    required: false,
  },
});

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  link: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now }
});

const sample = mongoose.model("samples", sampleSchema);

module.exports = sample;
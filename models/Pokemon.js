const mongoose = require('mongoose');

const schema = mongoose.Schema({
  _id: Number,
  name: String,
  type: String
});

module.exports = mongoose.model("Pokemon", schema)

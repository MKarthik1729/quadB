const mongoose = require('mongoose');

// Define a schema for a 'User' collection
const transaction = new mongoose.Schema({
  base_unit: {
    type: String,
    required: true
  },
  quote_unit: {
    type: String,
    required: true
  },
  last: {
    type: String,
    required: true
  },
  buy: {
    type: String,
    required: true
  },
  sell: {
    type: String,
    required: true
  },
  volume : {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create a model using the schema
const User = mongoose.model('User', transaction);

module.exports = User;

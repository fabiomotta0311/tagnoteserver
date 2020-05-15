const mongoose = require('mongoose');
const uuidv4 = require('uuid/v4');

const { Schema } = mongoose;

const ToolSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4(),
  },
  name: String,
  link: String,
  description: String,
  tags: {
    street: String,
  },
}, {
  timestamps: {},
});

module.exports = new mongoose.model('Tools', UserSchema);
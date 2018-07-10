const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
  name: { type: String, required: 'Name is required', unique: 'Name already taken' },
  latinName: { type: String, required: 'Latin name is required', unique: 'Name already taken' },
  family: String,
  image: String
});

module.exports = mongoose.model('Bird', birdSchema);

const mongoose = require('mongoose');

const { Schema } = mongoose;

const establishment = new Schema({
  name: { type: String, required: true },
  currentNeed: { type: Number },
  currentRelief: { type: Number },
  totalRelief: { type: Number },
});

const Establishment = mongoose.model('Establishment', establishment);

exports.Establishment = Establishment;

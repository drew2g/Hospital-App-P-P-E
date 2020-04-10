const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    establishment: { type: String, required: true },
    establishmentID: { type: Schema.Types.ObjectId, required: true },
  },
  {
    strict: false,
  }
);

const User = mongoose.model('User', user);

exports.User = User;

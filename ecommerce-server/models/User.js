const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },

  //below will create createdAt and updatedAt time
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;

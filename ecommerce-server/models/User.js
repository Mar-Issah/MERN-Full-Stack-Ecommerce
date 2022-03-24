const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
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

module.exports = Person;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    fullName: { type: String },
    avatar: { type: String },
    bio: { type: String },
    location: { type: String },
    phone: { type: String },
    joined: { type: Date, default: Date.now },
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
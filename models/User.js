
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  name: String,
  wishlist: [],
  cart: []
});

module.exports = mongoose.model("User", UserSchema);

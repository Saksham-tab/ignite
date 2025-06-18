
const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: String,
  items: Array,
  total: Number,
  address: String,
  phone: String,
  status: { type: String, default: "Processing" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", OrderSchema);

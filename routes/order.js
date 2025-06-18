
const router = require("express").Router();
const Order = require("../models/Order");

router.post("/place", async (req, res) => {
  const order = await Order.create(req.body);
  res.json({ msg: "Order placed", orderId: order._id });
});

module.exports = router;


const router = require("express").Router();
const Order = require("../models/Order");

router.get("/:orderId", async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order) return res.status(404).json({ msg: "Order not found" });
    res.json(order);
  } catch {
    res.status(500).json({ msg: "Invalid Order ID" });
  }
});

module.exports = router;


const router = require("express").Router();
const User = require("../models/User");

router.post("/add", async (req, res) => {
  const { userId, item } = req.body;
  const user = await User.findById(userId);
  user.cart.push(item);
  await user.save();
  res.json({ msg: "Item added to cart", cart: user.cart });
});

router.get("/:userId", async (req, res) => {
  const user = await User.findById(req.params.userId);
  res.json(user.cart);
});

router.post("/remove", async (req, res) => {
  const { userId, index } = req.body;
  const user = await User.findById(userId);
  user.cart.splice(index, 1);
  await user.save();
  res.json({ msg: "Item removed", cart: user.cart });
});

module.exports = router;


const router = require("express").Router();
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post("/add", async (req, res) => {
  const product = await Product.create(req.body);
  res.json({ msg: "Product added", product });
});

module.exports = router;

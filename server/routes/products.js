const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 129999,
    category: "Laptops",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 8999,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 4999,
    category: "Accessories",
  },
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
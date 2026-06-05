const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    price: 129999,
    category: "Laptops",
    image: "/images/gaming-laptop.jpg",
  },

  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 8999,
    category: "Accessories",
    image: "/images/keyboard.jpg",
  },

  {
    id: 3,
    name: "Gaming Mouse",
    price: 4999,
    category: "Accessories",
    image: "/images/mouse.jpg",
  },
];

module.exports = router;
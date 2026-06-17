const express = require("express");

const router = express.Router();

const products = [
  {
    id: 1,
    name: "TECHLIVE RTX 4070",
    price: 189999,
    category: "ПК",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200"
  },

  {
    id: 2,
    name: "TECHLIVE RTX 4060",
    price: 149999,
    category: "ПК",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=1200"
  },

  {
    id: 3,
    name: "ASUS ROG Strix",
    price: 139999,
    category: "Ноутбуки",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1200"
  },

  {
    id: 4,
    name: "MSI Katana",
    price: 119999,
    category: "Ноутбуки",
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1200"
  },

  {
    id: 5,
    name: "RTX 4070 Super",
    price: 79999,
    category: "Комплектующие",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200"
  },

  {
    id: 6,
    name: "AMD Ryzen 7 7800X3D",
    price: 42999,
    category: "Комплектующие",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200"
  },

  {
    id: 7,
    name: "SteelSeries Apex Pro",
    price: 14999,
    category: "Клавиатуры",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200"
  },

  {
    id: 8,
    name: "Keychron K8",
    price: 8999,
    category: "Клавиатуры",
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=1200"
  },

  {
    id: 9,
    name: "Logitech G Pro X",
    price: 6999,
    category: "Мыши",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?q=80&w=1200"
  },

  {
    id: 10,
    name: "Razer DeathAdder V3",
    price: 7999,
    category: "Мыши",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1200"
  },

  {
    id: 11,
    name: "LG UltraGear 27",
    price: 34999,
    category: "Мониторы",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1200"
  },

  {
    id: 12,
    name: "Samsung Odyssey G5",
    price: 29999,
    category: "Мониторы",
    image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200"
  }
];

router.get("/", (req, res) => {
  res.json(products);
});

module.exports = router;
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Devices.css';

const products = [
  { id: 1, name: 'Игровой ПК', price: 150000, img: '/img/pc.jpg' },
  { id: 2, name: 'Клавиатура', price: 7000, img: '/img/keyboard.jpg' },
  { id: 3, name: 'Мышь', price: 4500, img: '/img/mouse.jpg' },
];

function Devices() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="devices">
      <h1>Популярные товары</h1>
      <div className="devices-grid">
        {products.map(product => (
          <div key={product.id} className="device-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()} ₽</p>
            <button onClick={() => addToCart(product)}>Купить</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Devices;
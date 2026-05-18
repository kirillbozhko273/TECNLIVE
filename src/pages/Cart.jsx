import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) return <p className="empty-cart">Корзина пуста</p>;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="cart-page">
      <h1>Корзина</h1>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.img} alt={item.name} />
          <div className="cart-info">
            <p className="cart-name">{item.name}</p>
            <p className="cart-price">{item.price.toLocaleString()} ₽</p>
            <p className="cart-quantity">Количество: {item.quantity}</p>
            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Удалить</button>
          </div>
        </div>
      ))}
      <div className="cart-total">
        <p>Итого: {total.toLocaleString()} ₽</p>
        <button className="clear-btn" onClick={clearCart}>Очистить корзину</button>
      </div>
    </section>
  );
}

export default Cart;
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
  return (
    <section className="empty-cart-page">

      <div className="empty-cart-box">

        <h1>
          Ваша корзина пуста
        </h1>

        <p>
          Похоже, вы ещё не добавили товары в корзину.
          Перейдите в каталог и выберите подходящую технику для покупки.
        </p>

        <a
          href="/catalog"
          className="catalog-btn"
        >
          Перейти в каталог
        </a>

      </div>

    </section>
  );
}

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

 return (
  <section className="cart-page">

    <h1 className="cart-title">
      Корзина
    </h1>

    <div className="cart-layout">

      <div className="cart-products">

        {cartItems.map(item => (
          <div
            key={item.id}
            className="cart-item"
          >
            <img
              src={item.img}
              alt={item.name}
            />

            <div className="cart-info">

              <h3>{item.name}</h3>

              <p className="cart-price">
                {item.price.toLocaleString()} ₽
              </p>

              <p className="cart-quantity">
                Количество: {item.quantity}
              </p>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Удалить
              </button>

            </div>
          </div>
        ))}

      </div>

      <div className="cart-summary">

        <h2>
          Ваш заказ
        </h2>

        <div className="summary-row">
          <span>Товаров:</span>
          <span>{cartItems.length}</span>
        </div>

        <div className="summary-row">
          <span>Сумма:</span>
          <span>{total.toLocaleString()} ₽</span>
        </div>

        <div className="payment-method">
          <h3>Способ оплаты</h3>

          <label>
            <input
              type="radio"
              name="payment"
              defaultChecked
            />
            Банковская карта
          </label>

          <label>
            <input
              type="radio"
              name="payment"
            />
            СБП
          </label>
        </div>

        <button className="checkout-btn">
          Оформить заказ
        </button>

        <button
          className="clear-btn"
          onClick={clearCart}
        >
          Очистить корзину
        </button>

      </div>

    </div>

  </section>
);
}

export default Cart;
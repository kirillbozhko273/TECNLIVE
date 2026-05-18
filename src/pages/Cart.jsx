import React from 'react';
import { Helmet } from 'react-helmet';

function Cart() {
  const items = [
    {
      id: 1,
      name: 'RTX 4090 Gaming PC',
      price: '189 999 ₽',
      image:
        '',
    },

    {
      id: 2,
      name: 'Gaming Keyboard',
      price: '12 999 ₽',
      image:
        '',
    },
  ];

  return (
    <>
  <Helmet>

    <title>
      Корзина — TECHLIVE
    </title>

    <meta
      name='description'
      content='Корзина товаров интернет-магазина TECHLIVE.'
    />

  </Helmet>

    <section className='cart-page'>
      <div className='page-animation'></div>
      <div className='cart-top'>
        <h1>Корзина</h1>

        <p>
          Ваши выбранные товары
        </p>
      </div>

      <div className='cart-layout'>
        <div className='cart-items'>
          {items.map((item) => (
            <div
              className='cart-item'
              key={item.id}
            >
              <img
                src={item.image}
                alt={item.name}
              />

              <div className='cart-info'>
                <h3>{item.name}</h3>

                <span>{item.price}</span>
              </div>

              <div className='cart-quantity'>
                <button>-</button>

                <span>1</span>

                <button>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className='cart-summary'>
          <h2>Итого</h2>

          <div className='summary-line'>
            <span>Товары</span>

            <span>202 998 ₽</span>
          </div>

          <div className='summary-line'>
            <span>Доставка</span>

            <span>Бесплатно</span>
          </div>

          <button>
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
    </>
  );
}

export default Cart;
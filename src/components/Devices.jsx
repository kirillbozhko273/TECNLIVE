import React from 'react';

import { Link } from 'react-router-dom';

function Devices() {
  const products = [
    {
      id: 1,
      name: 'RTX Gaming PC',
      price: '189 999 ₽',
      image:
        '',
    },

    {
      id: 2,
      name: 'Mechanical Keyboard',
      price: '12 999 ₽',
      image:
        '',
    },

    {
      id: 3,
      name: 'Gaming Mouse X',
      price: '4 999 ₽',
      image:
        '',
    },
  ];

  return (
    <section className='devices'>
      <div className='devices-title'>
  <h2>Популярные товары</h2>

  <p>
    Премиальная техника нового поколения
  </p>
</div>

      <div className='devices-grid'>
        {products.map((item) => (
          <div className='device-card' key={item.id}>
            <div className='device-image'>
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

            <div className='device-content'>
              <h3>{item.name}</h3>

              <span>{item.price}</span>

              <Link
  to='/cart'
  className='buy-btn'
>
  Купить
</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Devices;
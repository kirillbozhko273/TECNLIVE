import React from 'react';
import { Helmet } from 'react-helmet';

function Catalog() {
  const products = [
    {
      id: 1,
      name: 'RTX 4090 Gaming PC',
      price: '189 999 ₽',
      image:
        '',
    },

    {
      id: 2,
      name: 'Gaming Laptop',
      price: '129 999 ₽',
      image:
        '',
    },

    {
      id: 3,
      name: 'Mechanical Keyboard',
      price: '12 999 ₽',
      image:
        '',
    },

    {
      id: 4,
      name: 'Gaming Mouse',
      price: '4 999 ₽',
      image:
        '',
    },

    {
      id: 5,
      name: 'UltraWide Monitor',
      price: '54 999 ₽',
      image:
        '',
    },

    {
      id: 6,
      name: 'RTX 4080 Setup',
      price: '159 999 ₽',
      image:
        '',
    },
  ];

  return (
    <>
  <Helmet>

    <title>
      Каталог — TECHLIVE
    </title>

    <meta
      name='description'
      content='Каталог игровых ПК, клавиатур, мониторов и техники TECHLIVE.'
    />

  </Helmet>
    <section className='catalog-page'>
      <div className='catalog-top'>
        <h1>Каталог</h1>

        <p>
          Премиальная техника и игровые решения
        </p>
      </div>

      <div className='catalog-layout'>
        <aside className='catalog-sidebar'>
  <h3>Категории</h3>

  <button>Игровые ПК</button>
  <button>Ноутбуки</button>
  <button>Мониторы</button>
  <button>Клавиатуры</button>
  <button>Мыши</button>

  <div className='sidebar-divider'></div>

  <h4>Цена</h4>

  <div className='price-box'>
    <input
      type='text'
      placeholder='От'
    />

    <input
      type='text'
      placeholder='До'
    />
  </div>

  <div className='sidebar-divider'></div>

  <label className='check-box'>
    <input type='checkbox' />
    Только в наличии
  </label>

  <div className='premium-box'>
    <span>TECHLIVE</span>

    <p>
      Premium gaming
      <br />
      experience
    </p>
  </div>
</aside>

        <div className='catalog-grid'>
          {products.map((item) => (
            <div
              className='catalog-card'
              key={item.id}
            >
              <div className='catalog-image'>
                <img
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className='catalog-content'>
                <h3>{item.name}</h3>

                <span>{item.price}</span>

                <button>
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default Catalog;
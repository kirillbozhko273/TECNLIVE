import React from 'react';

function Categories() {
  const categories = [
    {
      title: 'Игровые ПК',
      image:
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop',
    },

    {
      title: 'Ноутбуки',
      image:
        '',
    },

    {
      title: 'Комплектующие',
      image:
        '',
    },

    {
      title: 'Аксессуары',
      image:
        '',
    },
  ];

  return (
    <section className='categories'>
      <div className='section-top'>
        <h2>Категории</h2>

        <p>
          Всё для мощного игрового сетапа
        </p>
      </div>

      <div className='categories-grid'>
        {categories.map((item, index) => (
          <div
            className='category-card'
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
            />

            <div className='category-overlay'></div>

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
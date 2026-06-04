import React from 'react';

import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-left'>
        <p className='hero-subtitle'>
          НОВОЕ ПОКОЛЕНИЕ ТЕХНОЛОГИЙ
        </p>

        <h1>
          МОЩНОСТЬ
          <br />
          СТИЛЬ
          <br />
          TECHLIVE
        </h1>

        <p className='hero-description'>
          Современные игровые компьютеры,
          <br />
          комплектующие и аксессуары
          <br />
          для настоящих энтузиастов.
        </p>

       <Link
  to='/catalog'
  className='hero-btn'
>
  Перейти в каталог
</Link>
      </div>

      
        <div className='hero-right'>
  <img
    src='https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1200&auto=format&fit=crop'
    alt='pc'
  />
</div>

    </section>
  );
}

export default Hero;
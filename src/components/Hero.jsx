import React from 'react';
import { Link } from 'react-router-dom';

import heroPC from '../assets/hero-pc.png';

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
  src={heroPC}
  alt='Игровой ПК TECHLIVE'
/>
</div>

    </section>
  );
}

export default Hero;
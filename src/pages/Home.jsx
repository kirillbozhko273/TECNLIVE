import React from 'react';
import { Helmet } from 'react-helmet';

import Hero from '../components/Hero';
import Devices from '../components/Devices';

import Categories from '../components/Categories';



function Home() {
  return (
    <>
  <Helmet>
    <title>
      TECHLIVE — Игровые ПК
    </title>

    <meta
      name='description'
      content='TECHLIVE — магазин игровых ПК, мониторов и периферии.'
    />
  </Helmet>
    <>
    <div className='page-animation'></div>
      <Hero />
      <Devices />
      <Categories />
    </>
    </>
  );
}

export default Home;
import React from 'react';

import Hero from '../components/Hero';
import Devices from '../components/Devices';

import Categories from '../components/Categories';

function Home() {
  return (
    <>
    <div className='page-animation'></div>
      <Hero />
      <Devices />
      <Categories />
    </>
  );
}

export default Home;
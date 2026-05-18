import React from 'react';


import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>TECHLIVE</h1>
      </div>

      <nav>
        <Link to='/'>Главная</Link>
        <Link to='/catalog'>Каталог</Link>
        <Link to='/support'>Поддержка</Link>
        <Link to='/community'>Сообщество</Link>
        <Link to='/auth'></Link>
 
        
      </nav>

      <div className='header-icons'>
        <button>
          <FiSearch />
        </button>

  <Link
  to='/cart'
  className='cart-icon'
>
  <FiShoppingCart />
</Link>
        <Link
  to='/auth'
  className='login-btn'
>
  <FiUser />

  Вход
</Link>
      </div>
    </header>
  );
}

export default Header;

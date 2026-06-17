import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>

      <header className='header'>

        <div className='logo'>
          <h1>TECHLIVE</h1>
        </div>

        <nav>
          <Link to='/'>Главная</Link>
          <Link to='/catalog'>Каталог</Link>
          <Link to='/support'>Поддержка</Link>
          <Link to='/community'>Сообщество</Link>
        </nav>

        <div className='header-icons'>

          <button
            className='burger-btn'
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>

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

      {menuOpen && (
        <div
          className='mobile-overlay'
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`mobile-menu ${
          menuOpen ? 'mobile-menu-open' : ''
        }`}
      >

        <button
          className='close-menu'
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <Link
          to='/'
          onClick={() => setMenuOpen(false)}
        >
          Главная
        </Link>

        <Link
          to='/catalog'
          onClick={() => setMenuOpen(false)}
        >
          Каталог
        </Link>

        <Link
          to='/support'
          onClick={() => setMenuOpen(false)}
        >
          Поддержка
        </Link>

        <Link
          to='/community'
          onClick={() => setMenuOpen(false)}
        >
          Сообщество
        </Link>

        <Link
          to='/cart'
          onClick={() => setMenuOpen(false)}
        >
          Корзина
        </Link>

        <Link
          to='/auth'
          onClick={() => setMenuOpen(false)}
        >
          Вход
        </Link>

      </div>

    </>
  );
}

export default Header;
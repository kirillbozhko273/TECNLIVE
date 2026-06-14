import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import { useNavigate } from 'react-router-dom';

function Auth() {

  const navigate = useNavigate();

  const handleLogin = () => {

  const savedUser = JSON.parse(
    localStorage.getItem('user')
  );

  if (!savedUser) {
    alert('Аккаунт не найден. Сначала зарегистрируйтесь.');
    return;
  }

  if (
    savedUser.email === email &&
    savedUser.password === password
  ) {
    alert('Добро пожаловать в TECHLIVE!');

    navigate('/catalog');
  } else {
    alert('Неверный email или пароль');
  }

};

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
  <Helmet>

    <title>
      Авторизация — TECHLIVE
    </title>

    <meta
      name='description'
      content='Вход и регистрация в TECHLIVE.'
    />

  </Helmet>

    <section className='auth-page'>
      <div className='page-animation'></div>
      <div className='auth-container'>
        <div className='auth-left'>
        

          <h1>
            Добро
            <br />
            пожаловать
          </h1>

          <p>
            Войдите в аккаунт,
            чтобы управлять заказами
            и получить полный доступ к продукции
          </p>
        </div>

        <div className='auth-right'>
          <h2>Вход в аккаунт</h2>

          <input
  type='email'
  placeholder='Email'
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

          <input
  type='password'
  placeholder='Пароль'
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

          <div className='auth-options'>
            <label>
              <input type='checkbox' />
              Запомнить меня
            </label>

            <button>
              Забыли пароль?
            </button>
          </div>

         <button
  className='auth-btn'
  onClick={handleLogin}
>
  Войти
</button>

<div className='register-link'>
  Нет аккаунта?

 <span
  onClick={() => navigate('/register')}
>
  Зарегистрируйтесь
</span>
</div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Auth;
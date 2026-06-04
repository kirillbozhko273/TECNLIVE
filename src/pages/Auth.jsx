import React from 'react';
import { Helmet } from 'react-helmet';

import { useNavigate } from 'react-router-dom';

function Auth() {

  const navigate = useNavigate();

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
          />

          <input
            type='password'
            placeholder='Пароль'
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
  onClick={() => navigate('/')}
>
  Войти
</button>

<div className='register-link'>
  Нет аккаунта?

  <span
  onClick={() =>
    alert(
      'Регистрация будет доступна позже'
    )
  }
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
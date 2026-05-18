import React from 'react';
import { Helmet } from 'react-helmet';

function Support() {
  const faq = [
    'Как оформить заказ?',
    'Сколько длится доставка?',
    'Есть ли гарантия на товары?',
    'Можно ли вернуть товар?',
  ];

  return (
    <>
  <Helmet>

    <title>
      Поддержка — TECHLIVE
    </title>

    <meta
      name='description'
      content='Техническая поддержка пользователей TECHLIVE.'
    />

  </Helmet>

    <section className='support-page'>
      <div className='page-animation'></div>
      <div className='support-top'>
        <span>TECHLIVE SUPPORT</span>

        <h1>
          Центр поддержки
        </h1>

        <p>
          Мы всегда готовы помочь
          <br />
          и ответить на ваши вопросы
        </p>
      </div>

      <div className='support-layout'>
        <div className='support-left'>
          <div className='support-card'>
            <h3>Связаться с нами</h3>

            <p>
              support@techlive.ru
            </p>

            <p>
              +7 (999) 123-45-67
            </p>
          </div>

          <div className='support-card'>
            <h3>График работы</h3>

            <p>
              Пн — Пт: 10:00 — 22:00
            </p>

            <p>
              Сб — Вс: 11:00 — 20:00
            </p>
          </div>
        </div>

        <div className='support-right'>
          <div className='faq-box'>
            <h1>FAQ</h1>

            <div className='faq-list'>
              {faq.map((item, index) => (
                <div
                  className='faq-item'
                  key={index}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className='message-box'>
            <h1>Написать в поддержку</h1>

            <input
              type='text'
              placeholder='Ваш логин'
            />

            <input
              type='email'
              placeholder='Email'
            />

            <textarea
              placeholder='Ваше сообщение'
            ></textarea>

            <button>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Support;
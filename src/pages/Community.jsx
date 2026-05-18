import React from 'react';
import { Helmet } from 'react-helmet';

import {
  FaVk,
  FaTelegramPlane,
  FaDiscord,
} from 'react-icons/fa';

function Community() {
  const socials = [
    {
      title: 'VK Community',
      icon: <FaVk />,
      link: 'https://vk.com',
    },

    {
      title: 'Telegram',
      icon: <FaTelegramPlane />,
      link: 'https://t.me',
    },

    {
      title: 'Discord',
      icon: <FaDiscord />,
      link: 'https://discord.com',
    },
  ];

  return (
    <>
  <Helmet>

    <title>
      Community — TECHLIVE
    </title>

    <meta
      name='description'
      content='TECHLIVE Community — игровое сообщество и новости.'
    />

  </Helmet>
    <section className='community-page'>
      <div className='page-animation'></div>
      <div className='community-layout'>
        <div className='community-left'>
          <div className='community-wrapper'>
          <span className='community-label'>
            TECHLIVE COMMUNITY
          </span>

          <p>
            Общайся с игроками,
            следи за новостями
            <br></br>
            и будь частью TECHLIVE.
          </p>

          <div className='community-socials'>
            {socials.map((item, index) => (
              <a
                href={item.link}
                target='_blank'
                rel='noreferrer'
                className='community-card'
                key={index}
              >
                <div className='community-icon'>
                  {item.icon}
                </div>

                <div>
                  <h3>{item.title}</h3>

                  <span>{item.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        </div>

<img
  className='community-image'
  src=''
  alt='gaming setup'
/>

        <div className='community-right'>
        </div>
      </div>
    </section>
    </>
  );
}

export default Community;
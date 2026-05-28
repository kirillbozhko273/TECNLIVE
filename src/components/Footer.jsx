import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">TECHLIVE</h2>

          <p className="footer-text">
            Интернет-магазин современной техники,
            электроники и игровых устройств.
          </p>
        </div>

        <div className="footer-section">
          <h3>Навигация</h3>

          <a href="/">Главная</a>
          <a href="/catalog">Каталог</a>
          <a href="/community">Сообщество</a>
          <a href="/support">Поддержка</a>
        </div>

        <div className="footer-section">
          <h3>Контакты</h3>

          <p className="footer-contact">
            support@techlive.com
          </p>

          <p className="footer-contact">
            +7 (999) 123-45-67
          </p>

          <p className="footer-contact">
            Пн–Вс: 09:00–21:00
          </p>
        </div>

        <div className="footer-section">
          <h3>Социальные сети</h3>

          <div className="socials">
            <a href="/">VK</a>
            <a href="/">Telegram</a>
            <a href="/">Discord</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 TECHLIVE. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;
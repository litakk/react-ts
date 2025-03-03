interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-one">
          <img src="/footerLogo.png" alt="footer-logo" />
        </div>

        <div className="footer-two">
          <h3>Меню</h3>
          <p>Продукция</p>
          <p>Рецепты</p>
          <p>Блог</p>
        </div>

        <div className="footer-three">
          <h3>null</h3>
          <p>О компании</p>
          <p>Вакансии</p>
          <p>Контакты</p>
        </div>

        <div className="footer-four">
          <div className="fot">
            <div className="footer-left">
              <h2>Контактная информация</h2>
              <div className="kolDiv">
                <div>
                  <p>Поддержка:</p>
                  <h3>98 180-66-55</h3>
                </div>
                <div className="lf">
                  <p>Электронная почта:</p>
                  <h2>98 180-66-55</h2>
                </div>
              </div>
            </div>

            <div className="footer-right"></div>
          </div>
          <div className="images-main">
            <div className="item">
              <img src="/instagram.png" alt="instagram link" />
            </div>

            <div className="item">
              <img src="/facebook.png" alt="facebook link" />
            </div>
            <div className="item">
              <img src="/twitter.png" alt="twitter link" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-title">
        <p>Puremilky 2025</p>
        <p>Политика конфиденциальности</p>
      </div>

    </footer>
  );
};

export default Footer;

import "./index.scss";

const Contact: React.FC = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-left">
          <h1>О нашей компании</h1>
        </div>
        <div className="contact-right">
          <button>Подробнее</button>
        </div>
      </div>

      <div className="youtube-container">
        <div className="video-block">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ВАШ_ID_ВИДЕО"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-description">
          <h1>Группа компаний «Siyob»</h1>
          <p>
            Группа компаний «Siyob» - многопрофильный холдинг по производству и
            реализации товаров народного потребления, на протяжении 10 лет на
            рынке Узбекистана. Одной из компаний в составе холдинга стала
            компания «PureMilky Works».
          </p>
          <p>
            «PureMilky Works» самый крупный молочный завод в Узбекистане.
            Специализируется на производстве натуральной молочной и масложировой
            продукции. Основанное в 2013 году, предприятие имеет в составе,
            молочный и масложировой заводы.
          </p>
        </div>
      </div>

      {/* ФОРМА */}
      <div className="footer-input">
        <div className="input-container">
          <div className="left-fot">
            <h1>ОСТАЛИСЬ ВОПРОСЫ?</h1>
            <p>
              Заполните небольшую заявку и мы свяжемся с вами в течение 2х
              рабочих дней
            </p>
          </div>

          <div className="right-fot">
            <input type="text" placeholder="Ваше имя" />
            <input type="number" placeholder="Номер телефона" />
            <button>Отправить заявку</button>
          </div>
        </div>
      </div>


    </>
  );
};

export default Contact;

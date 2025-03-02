import "./index.scss";

const News: React.FC = () => {
  return (
    <div className="news-main">
      <div className="news-section-first">
        <h1>
          Новости <br /> и акции
        </h1>
        <p>
          Puremilky - молочная продукция фермерского <br /> производства,
          изготавливается согласно <br /> требованиям европейского качества
        </p>

        {/* Навигация в контейнере */}
        <div className="news-nav">
          <div className="btn-img">
            <img src="/лево.png" alt="Лево" />
          </div>
          <div className="btn-img">
            <img src="/право.png" alt="Право" />
          </div>
        </div>
      </div>

      <div className="news-cards">
        {[1, 2].map((_, i) => (
          <div key={i} className="news-card">
            <h5>Акция</h5><br />
            <h3>Выиграйте Malibu при покупке молока</h3>
            <p>
              Покупайте молоко и получите возможность выиграть <br /> Chevrolet Malibu
            </p>
            <button>Заполнить анкету</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;

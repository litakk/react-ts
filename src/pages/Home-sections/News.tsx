import "./index.scss"

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  return (
    <div className="news-main">
      <div className="news-section-first">
        <h1>Новости и акции</h1>
        <p>
          Puremilky - молочная продукция фермерского производства,
          изготавливается согласно требованиям европейского качества
        </p>

        <div className="btn-img">
        <img src="/лево.png" alt="" />
        </div>

      </div>
    </div>
  );
};

export default News;

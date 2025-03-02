interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className="about-container">
      <div className="about-title">
        <h1>
          О Нашей <br /> компании
        </h1>
        <p>
          Puremilky - молочная продукция фермерского производства,
          <br />
          изготавливается согласно <br /> требованиям европейского качества
        </p>
      </div>

      <div className="number-container">
        <div className="number-content">

            
          <div className="number-first">
            <div className="number-left">
              <h1>10m</h1>
              <p>Продуктов произведено</p>
            </div>
            <div className="number-right">
              <h1>10 000</h1>
              <p>Магазинов Узбекистана <br /> продают товары от <br /> Puremilky</p>
            </div>
          </div>

          <div className="number-second">
            <div className="number-left">
              <h1>23</h1>
              <p>Крупных городов СНГ <br /> пользуются продукцией<br /> Puremilky</p>
            </div>
            <div className="number-right">
              <h1>10m</h1>
              <p>Постоянных покупателей <br /> продукции Puremilky</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

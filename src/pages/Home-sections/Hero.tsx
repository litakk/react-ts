import "./index.scss"

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <img className="hero-img" src="/bgHeader.png" alt="background-header" />
      </div>

      <div className="hero-content">
        <h1>PUREMILKY</h1>
        <p>МОЛОЧНАЯ ПРОДУКЦИЯ <br /> ВЫСШЕГО КАЧЕСТВА</p>
      </div>
      <img className="extra-img" src="/bgExtra.png" alt="" />
    </section>
  );
};


export default Hero;

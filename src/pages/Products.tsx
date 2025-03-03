const Products: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-wrapper">
        <img className="hero-img" src="/product-nav.png" alt="background-header" />
      </div>

      <div className="hero-content product-title">
        <h1>КАТАЛОГ НАШЕЙ \\\</h1>
        <p>МОЛОЧНАЯ ПРОДУКЦИЯ <br /> ВЫСШЕГО КАЧЕСТВА</p>
      </div>
      <img className="extra-img" src="/bgExtra.png" alt="" />
    </section>
  );
};

export default Products;

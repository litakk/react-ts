import products from "../../utils/ProdArray";
import "./prod.scss";

interface ProdProps {}

const Prod: React.FC<ProdProps> = () => {
  return (
    <>
      <div className="main-prod">
        {products.map((product) => (
          <div className="main" key={product.id}>
            <img src={product.img} alt="product-img" />
            <div className="button">
              <h3>{product.name}</h3>
            <img src="/стрелка.png" alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Prod;

import "./index.scss"
import Prod from "../../components/Prod/Prod"
interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  return (
    <div className="product-container">

      <div className="product-content">
        <div className="fl">
        <h1>Продукция <br /> Puremilky</h1>
        <p>Молочная продукция <br /> уникального производства <br /> по лучшим рецептам</p>
        <button>Открыть каталог</button>
        </div>
        <Prod/>
      </div>
    </div>
  );
};

export default Product;

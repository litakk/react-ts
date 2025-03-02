import Hero from "./Home-sections/Hero";
import Product from "./Home-sections/Product"
import About from "./Home-sections/About"
import FeatureSection from "./Home-sections/FeatureSection"
import News from "./Home-sections/News"
import Contact from "./Home-sections/Contact";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Product/>
      <About/>
      <FeatureSection/>
      <News/>
      <Contact/>
    </div>
  );
};
export default Home;

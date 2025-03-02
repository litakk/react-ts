import "./feature.scss"

interface FeatureSectionProps {}

const FeatureSection: React.FC<FeatureSectionProps> = () => {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <div className="first-block">
          <h1>Преимущества <br /> продуктов</h1>
          <p>
            Puremilky - молочная продукция фермерского производства,
            изготавливается согласно <br /> требованиям европейского качества
          </p>
        </div>

        <div className="second-block">
          <img src="/feature.png" alt="feature-image" />

          <div className="feature-card card-1">
            Puremilky - молочная продукция фермерского производства,
            изготавливается согласно требованиям европейского качества
          </div>

          <div className="feature-card card-2">
            Puremilky - молочная продукция фермерского производства,
            изготавливается согласно требованиям европейского качества
          </div>

          <div className="feature-card card-3">
            Puremilky - молочная продукция фермерского производства,
            изготавливается согласно требованиям европейского качества
          </div>

          <div className="feature-card card-4">
            Puremilky - молочная продукция фермерского производства,
            изготавливается согласно требованиям европейского качества
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
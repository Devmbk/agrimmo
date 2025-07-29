import "./present.css";

const Present = () => {
  return (
    <div className="container-fluid present-section">
      {/* Section héro avec image de fond */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="container">
            <div className="row align-items-center min-vh-100">
              <div className="col-lg-6 col-md-12">
                <div className="hero-content">
                  <h1 className="hero-title">
                    <span className="highlight">AGRIMMO</span>
                    <br />L'Innovation Agro-Immobilière
                  </h1>
                  <p className="hero-subtitle">
                    Révolutionnons ensemble l'agriculture et l'immobilier rural
                  </p>
                  <div className="hero-features">
                    <div className="feature-badge">
                      <i className="bi bi-leaf"></i>
                      <span>Agriculture Durable</span>
                    </div>
                    <div className="feature-badge">
                      <i className="bi bi-house-heart"></i>
                      <span>Habitat Rural</span>
                    </div>
                    <div className="feature-badge">
                      <i className="bi bi-graph-up-arrow"></i>
                      <span>Investissement Rentable</span>
                    </div>
                  </div>
                  <button 
                    className="btn btn-hero"
                    onClick={() => document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Découvrir nos projets
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="hero-image">
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/banner.png`} 
                    alt="AGRIMMO - Agriculture et Immobilier"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section présentation simplifiée */}
      <div className="presentation-section">
        <div className="container">
          <div className="presentation-content">
            <h2 className="presentation-title">Notre Vision</h2>
            <p className="presentation-text">
              <strong>AGRIMMO</strong> comme son nom l'indique est la combinaison parfaite de l'agriculture et de l'immobilier. 
              C'est un projet d'entreprise innovant qui vise à révolutionner le secteur agricole et immobilier en créant 
              une synergie unique entre ces deux domaines essentiels.
            </p>
            <p className="presentation-text">
              Notre mission est de créer des solutions durables et rentables pour les investisseurs et les agriculteurs, 
              en proposant des opportunités d'investissement uniques dans le domaine agro-immobilier qui combinent 
              rentabilité économique et respect de l'environnement.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <i className="bi bi-check-circle-fill"></i>
                <span>Solutions durables et innovantes</span>
              </div>
              <div className="mission-point">
                <i className="bi bi-check-circle-fill"></i>
                <span>Investissements rentables et sécurisés</span>
              </div>
              <div className="mission-point">
                <i className="bi bi-check-circle-fill"></i>
                <span>Respect de l'environnement</span>
              </div>
              <div className="mission-point">
                <i className="bi bi-check-circle-fill"></i>
                <span>Accompagnement personnalisé</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Present;

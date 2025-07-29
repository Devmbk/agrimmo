import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* Section À propos */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-widget">
              <h5 className="footer-title">À propos d'AGRIMMO</h5>
              <p className="footer-text">
                AGRIMMO révolutionne le secteur agro-immobilier en combinant agriculture durable 
                et investissement immobilier rentable. Notre mission est de créer des solutions 
                innovantes pour un avenir plus vert.
              </p>
              <div className="footer-logo">
                <img src={`${process.env.PUBLIC_URL}/images/Agri.png`} alt="AGRIMMO Logo" className="logo-img" />
              </div>
            </div>
          </div>

          {/* Section Liens rapides */}
          <div className="col-lg-2 col-md-6 mb-4">
            <div className="footer-widget">
              <h5 className="footer-title">Liens rapides</h5>
              <ul className="footer-links">
                <li>
                  <a href="#presentation" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('presentation')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <i className="bi bi-chevron-right"></i>
                    Présentation
                  </a>
                </li>
                <li>
                  <a href="#productions" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('productions')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <i className="bi bi-chevron-right"></i>
                    Productions
                  </a>
                </li>
                <li>
                  <a href="#projets" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projets')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <i className="bi bi-chevron-right"></i>
                    Projets
                  </a>
                </li>
                <li>
                  <a href="#galerie" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <i className="bi bi-chevron-right"></i>
                    Galerie
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <i className="bi bi-chevron-right"></i>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Section Services */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h5 className="footer-title">Nos Services</h5>
              <ul className="footer-links">
                <li>
                  <a href="#productions">
                    <i className="bi bi-leaf"></i>
                    Agriculture Biologique
                  </a>
                </li>
                <li>
                  <a href="#productions">
                    <i className="bi bi-house-heart"></i>
                    Élevage Durable
                  </a>
                </li>
                <li>
                  <a href="#productions">
                    <i className="bi bi-building"></i>
                    Immobilier Rural
                  </a>
                </li>
                <li>
                  <a href="#projets">
                    <i className="bi bi-tools"></i>
                    Projets en Cours
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <i className="bi bi-people"></i>
                    Conseil & Expertise
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Section Contact */}
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="footer-widget">
              <h5 className="footer-title">Contactez-nous</h5>
              <div className="footer-contact">
                <div className="contact-item">
                  <i className="bi bi-geo-alt-fill"></i>
                  <div>
                    <p className="contact-label">Adresse</p>
                    <p className="contact-value">Casablanca, Maroc</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone-fill"></i>
                  <div>
                    <p className="contact-label">Téléphone</p>
                    <p className="contact-value">+212 6XX XX XX XX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="bi bi-envelope-fill"></i>
                  <div>
                    <p className="contact-label">Email</p>
                    <p className="contact-value">contact@agrimmo.ma</p>
                  </div>
                </div>
              </div>
              
              {/* Réseaux sociaux */}
              <div className="footer-social">
                <h6 className="social-title">Suivez-nous</h6>
                <div className="social-links">
                  <a href="#" className="social-link" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="LinkedIn">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="Twitter">
                    <i className="bi bi-twitter"></i>
                  </a>
                  <a href="#" className="social-link" aria-label="YouTube">
                    <i className="bi bi-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <hr className="footer-divider" />

        {/* Section Copyright */}
        <div className="row">
          <div className="col-md-6">
            <div className="footer-copyright">
              <p>&copy; 2025 AGRIMMO. Tous droits réservés.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-legal">
              <a href="#" className="legal-link">Mentions légales</a>
              <span className="separator">|</span>
              <a href="#" className="legal-link">Politique de confidentialité</a>
              <span className="separator">|</span>
              <a href="#" className="legal-link">CGU</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
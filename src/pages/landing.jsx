import Footer from "../component/footer/footer";
import NavBar from "../component/navBar/navBar";
import Present from "../component/presentation/present";
import Project from "../component/project/project";
import Productions from "../component/productions/productions";
import ProjectEncours from "../component/projectEnCours/projectEnCours";
import Gallery from "../component/gallery/gallery";
import Contact from "../component/contact/contact";
import ScrollToTop from "../component/scrollToTop/scrollToTop";
import './landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <NavBar />
      <div id="accueil">
        <Present />
      </div>
      <div className="section" id="projets">
        <Project />
      </div>
      <div className="section" id="productions">
        <Productions />
      </div>
      <div className="section" id="realisations">
        <ProjectEncours />
      </div>
      <div className="section" id="galerie">
        <Gallery />
      </div>
      <div className="section" id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Landing;
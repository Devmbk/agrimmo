import Footer from "../component/footer/footer";
import NavBar from "../component/navBar/navBar";
import Present from "../component/presentation/present";
import Project from "../component/project/project";
import ProjectEncours from "../component/projectEnCours/projectEnCours";
import './landing.css'
const Lading = () => {
  return (
    <div>
     <NavBar/>
     <Present/>
     <div className="section">
     <Project/>
     </div>
     <div className="section">
     <ProjectEncours/>
     </div>
     
     <Footer/>
    </div>
  );
}

export default Lading;
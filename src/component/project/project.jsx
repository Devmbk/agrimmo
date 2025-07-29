import "./project.css"

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Élevage Durable",
      image: `${process.env.PUBLIC_URL}/images/elevage-durable.svg`,
      description: "Développement de pratiques d'élevage respectueuses de l'environnement avec des méthodes durables qui privilégient le bien-être animal.",
      features: ["Bien-être animal", "Alimentation naturelle", "Pâturage libre", "Production locale"],
      icon: "🐄"
    },
    {
      id: 2,
      title: "Agriculture Moderne",
      image: `${process.env.PUBLIC_URL}/images/agriculture-moderne.svg`,
      description: "Technologies agricoles innovantes combinées aux pratiques traditionnelles pour une production optimale et respectueuse de l'environnement.",
      features: ["Agriculture bio", "Technologies modernes", "Rendement optimal", "Préservation des sols"],
      icon: "🌾"
    },
    {
      id: 3,
      title: "Immobilier Rural",
      image: `${process.env.PUBLIC_URL}/images/immobilier-rural.svg`,
      description: "Conception et réalisation d'habitats ruraux modernes intégrant les énergies renouvelables et l'architecture bioclimatique.",
      features: ["Éco-construction", "Énergies renouvelables", "Design moderne", "Intégration paysagère"],
      icon: "🏡"
    }
  ];

  return (
    <div className="project-section">
      <div className="container">
        <div className="project-header">
          <h1 className="project-main-title">Nos Projets</h1>
          <p className="project-subtitle">
            Découvrez nos initiatives innovantes qui façonnent l'avenir de l'agriculture, 
            de l'élevage et de l'habitat rural durable.
          </p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className={`project-card project-card-${index + 1}`}>
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  className="project-image" 
                  alt={project.title}
                />
                <div className="project-overlay">
                  <span className="project-icon">{project.icon}</span>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  {project.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      <i className="bi bi-check2"></i>
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button className="project-btn">
                  En savoir plus
                  <i className="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

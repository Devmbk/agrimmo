import "./projectEnCours.css"

const ProjectEncours = () => {
  return (
    <div className="project-en-cours-section">
      <div className="container-fluid">
        <h1 className="text_forme">Nos Réalisations</h1>
        <div className="row card_contenair">
          <div className="col-8 mx-auto">
            <div className="card" style={{width: '100%', height:'30vh'}}>
              <img src={`${process.env.PUBLIC_URL}/images/projets-en-cours.svg`} className="card-img-top h-50" alt="Projets en Cours - Chantier de construction avec grue et ouvriers" style={{objectFit: 'cover'}}/>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">Projet en Développement</h5>
                <p className="card-text text-center">
                  Découvrez nos projets innovants qui combinent agriculture durable et développement immobilier responsable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEncours;

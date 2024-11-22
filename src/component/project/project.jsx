import "./project.css"
const Project = () => {
  return (
    <div className="container-fluid h-100 ">
      <h1 className="text_forme">Projet</h1>
<div className="row card_contenair  ">
    <div className="col-sm-12 col-md-4">
        <div className="card card_elev"  style={{width: '18rem'}}>
            <img src="https://via.placeholder.com/150" className="card-img-top h-100" alt="..."/>
        </div>
        </div>
        <div className=" col-sm-12 col-md-4">
        <div className="card card_agri" style={{width: '18rem'}}>
            <img src="https://via.placeholder.com/150" className="card-img-top h-100" alt="..."/>
           
            </div>
            </div>
            <div className=" col-sm-12 col-md-4">
            <div className="card card_Immo" style={{width: '18rem'}}>
                <img src="https://via.placeholder.com/150" className="card-img-top h-100" alt="..."/>
              
                </div>
                </div>
    </div>
    </div>
  );
}

export default Project;
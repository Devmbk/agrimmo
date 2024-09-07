import "./project.css"
const Project = () => {
  return (
    <div className="container">
<div className="row card_contenair pt-5">
    <div className="col-4">
        <div className="card "  style={{width: '18rem'}}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
        </div>
        </div>
        <div className="col-4">
        <div className="card card_agri" style={{width: '18rem'}}>
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
           
            </div>
            </div>
            <div className="col-4">
            <div className="card card_Immo" style={{width: '18rem'}}>
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="..."/>
              
                </div>
                </div>
    </div>
    </div>
  );
}

export default Project;
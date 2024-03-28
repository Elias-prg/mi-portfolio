import '/src/style/proyectos.css';




export const Proyectos = () => {
  
  return (
    <>
     <section className='section-proy' id="projects">
      <div className="container one text-center">
      <h2 >Projects</h2>
        <div className="row">
          <div className="col">
            <div className="card">
              <img src={"https://docs.oracle.com/javafx/2/get_started/img/two_logins.png"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" >Login</h5>
                <p className="card-text"> Utilizando Java || Jpa || hibernate || MySql || </p>
                <a href="#" className="btn btn-primary">Go to code</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={"https://docs.oracle.com/javafx/2/get_started/img/two_logins.png"} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" >Login</h5>
                <p className="card-text"> Utilizando Java || Jpa || hibernate || MySql || </p>
                <a href="#" className="btn btn-primary">Go to code</a>
              </div>
            </div>
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>
    </section>
 
    </> 
  );
};


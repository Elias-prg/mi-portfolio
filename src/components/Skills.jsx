

export const Skills = () => {
  return (
    <>
    <section className='section-skills' id='skills'>
    <h1  className='title-skills'><span>S</span>kills     </h1>
    <div className="container text-center container-skills " >
      <div className="row">
        <div className="col angular"><i className='bx bxl-angular' style={{color : '#EB1910'}}></i></div>
        <div className="col"><i className='bx bxl-typescript' style= {{color :'#0D36DE '}}></i></div>
        <div className="col"><i className='bx bxl-java' style={{color:'#ffffff'}} ></i></div>
        <div className="col"><i className='bx bxl-javascript' style={{color:'#f0f319'}} ></i></div>
      </div>
      <div className="row">
        <div className="col"><i className='bx bxl-git'  style={{color:'#0e0f0f'}}></i></div>
        <div className="col"><i className='bx bxl-react' style={{color:'#0ecdad'}} ></i></div>
        <div className="col"><i className='bx bxl-bootstrap' style={{color:'#c310df '}} ></i></div>
        <div className="col"><i className='bx bxl-spring-boot' style={{color:'#169708'}} ></i></div>
      </div>
      <div className="row">
        
        <div className="col"><i className='bx bxl-css3' style={{color:'#3b95c2 '}} ></i></div>
        <div className="col"><i className='bx bxl-html5' style={{color:'#d36f18'}} ></i></div>
        {/* <div className="col">col</div> */}
      </div>



    </div>
    </section>

    </>

  )
}  

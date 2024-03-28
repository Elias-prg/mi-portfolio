import  { useState } from 'react';
import '/src/style/nav.css';
import { Lenguage } from './Lenguage';
import { Link } from 'react-router-dom';


const Nav = () => {


  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <StyledComponent>
      <header className="header">
        <a href="#" className="logo">
          <img className="img-logo" src="https://d31ezp3r8jwmks.cloudfront.net/3i4rroah170f9obib6v0brashdc3" />
        </a>

        <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>

        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          {/* <button onClick={toggleTheme}>Cambiar tema</button>         ver porque sigue sin andar                 */}
          {/* <a className="active">
            Home
          </a>
          
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a> */}
        <li className='no-point'>
          <Link to="/">Home</Link>
        </li>
        <li className='no-point'>
          <Link to="/projects">Projects</Link>
        </li>
        <li className='no-point'>
          <Link to="/skills">Skills</Link>
        </li>
        <li className='no-point'>
          <Link to="/education">Education</Link>
        </li>
          <Lenguage />
          
        </nav>
      </header>
    // </StyledComponent> 
  );
};

export default Nav;

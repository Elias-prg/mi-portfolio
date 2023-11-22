import  { useState } from 'react';
import '/src/style/nav.css';
import { Lenguage } from './Lenguage';

const Nav = () => {


  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <StyledComponent>
      <header className="header">
        <a href="#" className="logo">
          Elias
        </a>

        <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>

        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          {/* <button onClick={toggleTheme}>Cambiar tema</button>         ver porque sigue sin andar                 */}
          <a href="#home" className="active">
            Home
          </a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <Lenguage />
          {/* <a href="#contact">Contact</a> */}
        </nav>
      </header>
    // </StyledComponent> 
  );
};

export default Nav;

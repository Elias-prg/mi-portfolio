import { useState } from 'react';
import '/src/style/nav.css';
import { Lenguage } from './Lenguage';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className={isOpen ? 'nav-links nav-active' : 'nav-links'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <Lenguage />
    </nav>
  );
};

export default Nav;


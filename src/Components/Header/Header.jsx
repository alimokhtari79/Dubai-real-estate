import React, { useState } from 'react';
import { navLinks } from '../../constants';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="main-header">
      <nav className="header">
        <div className="logo">
          <img src={require('../../assets/imgs/Group 1.png')} alt="logo" />
        </div>

        <ul className={`header__items ${isOpen ? 'nav-active' : ''}`}>
          {navLinks.map((link) => (
            <li className="header__item">
              <p>{link.title}</p>
            </li>
          ))}
        </ul>
        <div>
          <button className="singIn_btn">Sing in</button>
        </div>
        <div
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          className="burger-menu"
        >
          <div className={`line-1 ${isOpen ? 'rotate-1' : ''}`}></div>
          <div className={`line-2 ${isOpen ? 'rotate-2' : ''}`}></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

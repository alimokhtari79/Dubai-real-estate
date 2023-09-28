import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__items">
        <p className="footer-title">About Us</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          velit magnam doloribus! Aperiam vitae labore, quibusdam molestias
          eligendi consequatur sapiente incidunt fuga deserunt reiciendis vero
          itaque iste laudantium dicta nam.
        </p>
      </div>
      <div className="main-footer__items">
        <p className="footer-title">Explore</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Our Team</li>
        </ul>
      </div>
      <div className="main-footer__items">
        <p className="footer-title">Contact Us</p>
        <div>
          <p>Unit.1723, Level 17,</p>
          <p>Tamani Art Building Business,</p>
          <p>Bay Dubai, UAE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

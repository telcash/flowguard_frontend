import React from 'react';
import './footer.css';
import logoGray from '../../assets/logo-gray.png';

const Footer = () => {
  return (
    <div className='fg__footer'>
      <div className='fg__footer-content'>
        <div className='fg__footer-content_logo'>
          <img
              src={logoGray}
              alt='logo' 
          />
          <span>Flowguard</span>
        </div>
        <div className='fg__footer-content_column'>
          <h2>Información</h2>
          <ul>
            <li>¿Quienes somos?</li>
            <li>Privacidad</li>
            <li>Cookies</li>
          </ul>
        </div>
        <div className='fg__footer-content_column'>
          <h2>Contáctanos</h2>
          <ul>
            <li>+ 34 111 222 333</li>
            <li>contacto@flowguard.com</li>
          </ul>
        </div>
        <div className='fg__footer-content_column'>
          <h2>¿Dónde estamos?</h2>
          <ul>
            <li>Calle Madrid 1</li>
            <li>Lunes a viernes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

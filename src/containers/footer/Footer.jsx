import React from 'react';
import './footer.css';
import { Cta } from '../../components';

const Footer = () => {
  return (
    <div className='fg__footer'>
        <div className="fg__footer-cta">
            <Cta></Cta>
        </div>
        <div className='fg__footer-info'>
            Info
        </div>
    </div>
  );
};

export default Footer;

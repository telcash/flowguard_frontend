import React, {useState} from 'react';
import './footer.css';
import { Cta, CtaForm } from '../../components';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);
  const showForm = (email) => {
    setEmail(email)
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };

  return (
    <div className='fg__footer'>
        <div className="fg__footer-cta">
            <Cta data={showForm}></Cta>
        </div>
        {isFormVisible && (
            <div className="fg__hero-cta-form">
              <CtaForm onClose={hideForm} email={email}/>
            </div>
          )}
        <div className='fg__footer-info'>
            Info
        </div>
    </div>
  );
};

export default Footer;

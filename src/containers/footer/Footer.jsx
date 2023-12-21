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
        <div className="fg__footer-top">
          <div className='fg__footer-top-quote'>
            <div className='fg__footer-top-quote-info'>
              <p>“Creo que el próximo Pearl Harbor o el próximo 11 de septiembre será cibernético, y nos enfrentamos a una vulnerabilidad en todos sistemas, pero el agua es uno de los más críticos y creo que uno de los más vulnerables”</p>
              <h3>- Angus King. Senador de EEUU</h3>
            </div>
          </div>
          <div className='fg__footer-top-cta'>
            <h2>Comienza ahora</h2>
            <div className='fg__footer-top-cta-form'>
                <Cta data={showForm}></Cta>
            </div>
          </div>
        </div>
        {isFormVisible && (
            <div className="fg__hero-cta-form">
              <CtaForm onClose={hideForm} email={email}/>
            </div>
          )}
        <div className='fg__footer-bottom'>
            <a href="/#">Aviso legal</a>
            <a href="/#">Política de privacidad</a>
            <a href="/#">Política de cookies</a>
        </div>
    </div>
  );
};

export default Footer;

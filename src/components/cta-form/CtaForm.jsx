import React, { useState } from 'react';
import './cta-form.css';
import logo from '../../assets/logo.png';

const CtaForm = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    company: '',
    job: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Close the popup or perform other actions as needed
  };

  return (
    <div className="fg__ctaForm fade-in-fwd">
      <div className="fg__ctaForm-logo">
        <div className='fg__ctaForm-logo-container'>
          <img src={logo} alt="Logo" />
        </div>
        <span>Flowguard</span>
      </div>
      <div className="fg__ctaForm-header">
        <h3>Por favor, rellena el formulario para comenzar</h3>
        <h4>Usa una dirección de correo electrónico válida y operativa</h4>
      </div>
      <form className='fg__ctaForm-form' onSubmit={handleSubmit}>
        <div className='fg__ctaForm-form_fields'>
          <div className='fg__ctaForm-form-field'>
            <label htmlFor='name'>Nombre:</label>
            <input id='name' type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className='fg__ctaForm-form-field'>
            <label htmlFor='surname'>Apellidos:</label>
            <input id='surname' type="text" name="surname" value={formData.surname} onChange={handleChange} />
          </div>
          <div className='fg__ctaForm-form-field'>
            <label htmlFor='phone'>Teléfono de contacto:</label>
            <input id='phone' type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className='fg__ctaForm-form-field'>
            <label htmlFor='email'>Correo electrónico:</label>
            <input id='email' type="text" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className='fg__ctaForm-form-field'>
            <label htmlFor='company'>Empresa:</label>
            <input id='company' type="text" name="company" value={formData.company} onChange={handleChange} />
          </div>
          <div className='fg__ctaForm-form-field'>
            <label>Cargo:</label>
            <input type="text" name="job" value={formData.job} onChange={handleChange} />
          </div>
        </div>
        <div className='fg__ctaForm_actions'>
          <button type="submit">Enviar</button>
          <button type="button" onClick={() => onClose()}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default CtaForm;
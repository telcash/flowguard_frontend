import React, { useState } from 'react';
import './cta.css'

const Cta = ({onClose}) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
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
    <div className="popup-form">
      <div className="header">
        {/* Replace 'your-logo-url' with the actual path or URL of your logo */}
        <img src="your-logo-url" alt="Logo" className="logo" />
        <span className="close-button" onClick={() => onClose()}>
          X
        </span>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" value={formData.surname} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>
        <label>
          Job:
          <input type="text" name="job" value={formData.job} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Cta;
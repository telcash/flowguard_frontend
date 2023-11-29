import React from 'react';
import './feature.css';

const Feature = ({icon, title, description}) => {
  return (
    <div className='fg__feature'>
      <img src={icon} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
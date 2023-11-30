import React, { useState } from 'react';
import './feature.css';

const Feature = ({icon, title, description}) => {
  const [hover, setHover] = useState(false);
  return (
    <div 
      className='fg__feature'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={icon} alt={title} className={`${ hover ? 'wobble-hor-bottom' : ''}`}/>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Feature;
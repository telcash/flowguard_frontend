/**
 * Componente que contiene una animación de lluvia: gotas cayendo que generan ondas al llegar al suelo
 */

import React from 'react';
import './rain.css';

const Rain = ({ numRainElements, numWaves, numParticles }) => {
    const generateRainElements = () => {
        const rainElements = [];
        for (let i = 0; i < numRainElements; i++) {
          rainElements.push(
            <div key={i} className="rain">
              <div className="drop"></div>
              <div className="waves">
                {generateElements(numWaves)}
              </div>
              <div className="particles">
                {generateElements(numParticles)}
              </div>
            </div>
          );
        }
        return rainElements;
    };
    
    const generateElements = (quantity) => {
        const elements = [];
        for (let i = 0; i < quantity; i++) {
          elements.push(<div key={i}></div>);
        }
        return elements;
    }

    return (
        <div className='fg__rain'>
            <div className='fg__rain-container'>
                {generateRainElements()}
            </div>
        </div>
    ) 
}

export default Rain;

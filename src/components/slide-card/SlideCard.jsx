/**
 * Componente que modelo cada slide que compone el Slider de la sección Proceso
 */

import React from "react";
import './slide-card.css';

const SlideCard = ({title, imgSrc, description}) => {
    return (
        <div className="fg__slideCard">
            <figure className="fg__slideCard-img">
                <img src={imgSrc} alt={title} />
            </figure>
            <div className="fg__slideCard-info">
                <h3>{title}</h3>
                <div className="fg__slideCard-info-description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SlideCard;
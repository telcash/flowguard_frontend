import React from "react";
import './slide-card.css';

const SlideCard = ({title, imgSrc, description}) => {
    return (
        <div className="fg__processSlide">
            <figure className="fg__processSlide-img">
                <img src={imgSrc} alt={title} />
            </figure>
            <div className="fg__processSlide-info">
                <h3>{title}</h3>
                <div className="fg__processSlide-info-description">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SlideCard;
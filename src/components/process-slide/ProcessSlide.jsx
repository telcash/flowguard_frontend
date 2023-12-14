import React from "react";
import './process-slide.css';

const ProcessSlide = ({title, imgSrc, description}) => {
    return (
        <div className="fg__processSlide">
            <figure className="fg__processSlide-img">
                <img src={imgSrc} alt={title} />
            </figure>
            <div className="fg__processSlide-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProcessSlide;
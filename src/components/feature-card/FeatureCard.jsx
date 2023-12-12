import React, {useState } from "react";
import './feature-card.css';

const FeatureCard = ({icon, title, description}) => {
    const [hover, setHover] = useState(false);
    return(
        <article
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <div className={
                `fg__featureCard ${hover ? 'rotate-in-ver' : ''}`
            }>
                <figure className="fg__featureCard-icon">
                    <img className={hover ? 'flipped' : ''} src={icon} alt={title} />
                </figure>
                <div className="fg__featureCard-body">
                    <h3 className={hover ? 'flipped' : ''}>{title}</h3>
                    <p className={hover ? 'flipped' : ''}>{description}</p>
                </div>
            </div>
        </article>
    );
};

export default FeatureCard;

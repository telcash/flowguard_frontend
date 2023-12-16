import React, { useState, useRef } from "react";
import './feature-card.css';

const FeatureCard = ({icon, title, description}) => {
    const [hover, setHover] = useState(false);
    const article = useRef(null);

    const flipcard = () => {
        setHover(true);
        article.current.style.zIndex = 0;
        console.log('se dispara onleave')
    }
    return(
        <article
            ref={article}
            onMouseEnter={() => {
                flipcard();
            }}
            onMouseLeave={(e) => {
                console.log(`x: ${e.clientX}`);
                console.log(`left: ${article.current.getBoundingClientRect().left}`);
                console.log(`right: ${article.current.getBoundingClientRect().right}`);
                console.log(`y: ${e.clientY}`);
                console.log(`top: ${article.current.getBoundingClientRect().top}`);
                console.log(`bottom: ${article.current.getBoundingClientRect().bottom}`);
                if(
                    !(e.clientX > article.current.getBoundingClientRect().left &&
                    e.clientX < article.current.getBoundingClientRect().right &&
                    e.clientY > article.current.getBoundingClientRect().top &&
                    e.clientY < article.current.getBoundingClientRect().bottom)
                ) {
                    setHover(false);
                }
                article.current.style.zIndex = 1;
                console.log('se dispara onenter');
            }}
        >
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

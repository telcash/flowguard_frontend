import React, { useState, useRef } from "react";
import './feature-card.css';

const FeatureCard = ({icon, title, description}) => {
    const [hover, setHover] = useState(false);
    const [toId, setToId] = useState(null);
    const article = useRef(null);

    const flipCard = () => {
        if(window.innerWidth > 768) {
            clearTimeout(toId);
            setHover(true);
            article.current.style.zIndex = 0;
        }        
    }

    const unflipCard = (event) => {
        if(window.innerWidth > 768){
            clearTimeout(toId);
            if(
                !(event.clientX > article.current.getBoundingClientRect().left &&
                event.clientX < article.current.getBoundingClientRect().right &&
                event.clientY > article.current.getBoundingClientRect().top &&
                event.clientY < article.current.getBoundingClientRect().bottom)
            ) {
                setHover(false);
            } else {
                const id = setTimeout(() => {
                    setHover(false);
                }, 500)
                setToId(id);
            }
            article.current.style.zIndex = 1;
        }
    }

    return(
        <article
            ref={article}
            onMouseEnter={() => flipCard()}
            onMouseLeave={(e) => unflipCard(e)}
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

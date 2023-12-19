import React, {useState} from "react";
import './hero-section.css';
import { useTranslation } from 'react-i18next';
import { Rain, CtaForm } from "../../components";
import backgroundImg from "../../assets/hero-background.jpg";

const HeroSection = () => {
    const [t] = useTranslation("global");
    const [isFormVisible, setFormVisible] = useState(false);

  const showForm = () => {
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };
    return (
        <div className="fg__hero">
          <h1 className="fg__hero-heading">{t("header.tagline")}</h1>
          <p className="fg__hero-description">{t("header.description")}</p>
          <div className="fg__hero-cta">
              <button onClick={showForm}>Contacto</button>
          </div>
          <div className="fg__hero-image">
              <img src={backgroundImg} alt="" />
          </div>
          <div className="fg__hero-cta-form">
            {isFormVisible && (
              <CtaForm className="fg__hero-cta-form" onClose={hideForm} />
            )}
          </div>
          <div className="rain_container">
              <Rain numRainElements={3} numWaves={2} numParticles={4}></Rain>
          </div>
        </div>
    );
}

export default HeroSection;
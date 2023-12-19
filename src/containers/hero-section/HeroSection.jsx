import React, {useState} from "react";
import './hero-section.css';
import { useTranslation } from 'react-i18next';
import { Rain } from "../../components";
import backgroundImg from "../../assets/hero-background.jpg";
import ContactForm from "../../components/contact-form/ContactForm";

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
              {isFormVisible && (
              <ContactForm onClose={hideForm} />)}
          </div>
          <div className="fg__hero-image">
              <img src={backgroundImg} alt="" />
          </div>
          <div className="rain_container">
              <Rain numRainElements={7} numWaves={2} numParticles={4}></Rain>
          </div>
        </div>
    );
}

export default HeroSection;
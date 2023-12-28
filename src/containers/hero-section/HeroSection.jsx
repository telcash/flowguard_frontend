/**
 * Componente contenedor de la HeroSection
 */

import React, {useState} from "react";
import './hero-section.css';
import { useTranslation } from 'react-i18next';
import { Rain, CtaForm, Cta } from "../../components";
import backgroundImg from "../../assets/hero-background.jpg";

const HeroSection = () => {
  const [t] = useTranslation("global");
  const [email, setEmail] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const showForm = (email) => {
    setEmail(email)
    setFormVisible(true);
  };

  const hideForm = () => {
    setFormVisible(false);
  };
    return (
        <div className="fg__hero">
          <h1 className="fg__hero-heading">Potenciando la <strong>Ciberseguridad</strong> de las Infraestructuras críticas de <strong>Aguas públicas y privadas</strong></h1>
          <p className="fg__hero-description">{t("header.description")}</p>
          <div className="fg__hero-cta">
            <Cta data={showForm}></Cta>
          </div>
          <div className="fg__hero-image">
              <img src={backgroundImg} alt="" />
          </div>
          <div className="rain_container">
              <Rain numRainElements={3} numWaves={2} numParticles={4}></Rain>
          </div>
          {isFormVisible && (
            <div className="fg__hero-cta-form">
              <CtaForm onClose={hideForm} email={email}/>
            </div>
          )}
        </div>
    );
}

export default HeroSection;
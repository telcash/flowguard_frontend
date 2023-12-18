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
            
            <div className="fg__hero-info">
                    <h1>{t("header.tagline")}</h1>
                    <p>{t("header.description")}</p>
                    <div className="fg__hero-info_actions">
                        <button onClick={showForm}>Contacto</button>
                        {isFormVisible && (
                        <ContactForm onClose={hideForm} />)}
                    </div>
            </div>
            <div className="rain_container">
                <Rain></Rain>
            </div>
            <div className="fg__hero-background">
                <img src={backgroundImg} alt="" />
            </div>
        </div>
    );
}

export default HeroSection;
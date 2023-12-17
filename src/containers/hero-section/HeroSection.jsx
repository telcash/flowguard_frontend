import React from "react";
import './hero-section.css';
import { useTranslation } from 'react-i18next';
import { Rain } from "../../components";
import backgroundImg from "../../assets/hero-background.jpg";

const HeroSection = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__hero">
            <div className="fg__hero-container">
                <div className="fg__hero-container_info">
                    <h1>{t("header.tagline")}</h1>
                    <p>{t("header.description")}</p>
                    <div className="fg__hero-container_info-actions">
                        <button><a href="#features">{t("features.title")}</a></button>
                    </div>
                </div>
            </div>
            <div className="rain_container">
                <Rain></Rain>
            </div>
            <div className="fg__hero-container-background">
                <img src={backgroundImg} alt="" />
            </div>
        </div>
    );
}

export default HeroSection;
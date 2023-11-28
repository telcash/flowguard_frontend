import React from "react";
import './hero-section.css';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__hero">
            <div className="fg__hero-container">
                <div className="fg__hero-container-info">
                    <h1>{t("header.tagline")}</h1>
                    <p>{t("header.description")}</p>
                    <div className="fg__hero-container-info_actions">
                        <button>Action</button>
                    </div>
                </div>
                <div className="fg__hero-container-slider">

                </div>
            </div>
        </div>
    );
}

export default HeroSection;
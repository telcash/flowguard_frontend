import React from "react";
import './hero-section.css';
import { useTranslation } from 'react-i18next';
import { Waves } from "../../components";
import heroImg from "../../assets/hero_img/hero-img.jpg";

const HeroSection = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__hero">
            <div className="fg__hero-container">
                <div className="fg__hero-container_info">
                    <h1>{t("header.tagline")}</h1>
                    <p>{t("header.description")}</p>
                    <div className="fg__hero-container_info-actions">
                        <button>Action</button>
                    </div>
                </div>
                <div className="fg__hero-container_img">
                    <img src={heroImg} alt="" />
                </div>
            </div>
            <Waves></Waves>
        </div>
    );
}

export default HeroSection;
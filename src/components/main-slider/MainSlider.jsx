import React from "react";
import './main-slider.css';
import Carousel from 'react-bootstrap/Carousel';
import dummyImg from '../../assets/KWR Digitalisation & data.jpg';
import { useTranslation } from 'react-i18next';

const MainSlider = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__mainSlider">
            <Carousel fade>
                <Carousel.Item className="fg__mainSlider-item">
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("header.slides.slide1.title")}</h3>
                        <p>{t("header.slides.slide1.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("header.slides.slide2.title")}</h3>
                        <p>{t("header.slides.slide2.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("header.slides.slide3.title")}</h3>
                        <p>{t("header.slides.slide3.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainSlider;
import React from "react";
import './main-slider.css';
import Carousel from 'react-bootstrap/Carousel';
import dummyImg from '../../assets/KWR Digitalisation & data.jpg';
import { useTranslation } from 'react-i18next';

const MainSlider = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__mainSlider">
            <Carousel slide={false}>
                <Carousel.Item className="fg__mainSlider-item">
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step1.title")}</h3>
                        <p>{t("project-plan.step1.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step2.title")}</h3>
                        <p>{t("project-plan.step2.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step3.title")}</h3>
                        <p>{t("project-plan.step3.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step4.title")}</h3>
                        <p>{t("project-plan.step4.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step5.title")}</h3>
                        <p>{t("project-plan.step5.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step6.title")}</h3>
                        <p>{t("project-plan.step6.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dummyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step7.title")}</h3>
                        <p>{t("project-plan.step7.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainSlider;
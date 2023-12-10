import React from "react";
import './main-slider.css';
import Carousel from 'react-bootstrap/Carousel';
import { dataPreprocessingImg, dataTopologyImg, normalBehaviourLearnImg, realTimeDataImg, sensorsOptimizationImg, integrationTestImg, implementationMainteinance } from "../../assets/process_img";
import { useTranslation } from 'react-i18next';

const MainSlider = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__mainSlider">
            <Carousel slide={false}>
                <Carousel.Item className="fg__mainSlider-item">
                    <img src={dataPreprocessingImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step1.title")}</h3>
                        <p>{t("project-plan.step1.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={dataTopologyImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step2.title")}</h3>
                        <p>{t("project-plan.step2.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={normalBehaviourLearnImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step3.title")}</h3>
                        <p>{t("project-plan.step3.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={realTimeDataImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step4.title")}</h3>
                        <p>{t("project-plan.step4.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={sensorsOptimizationImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step5.title")}</h3>
                        <p>{t("project-plan.step5.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={integrationTestImg} alt="dummy" />
                    <Carousel.Caption>
                        <h3>{t("project-plan.step6.title")}</h3>
                        <p>{t("project-plan.step6.description")}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={implementationMainteinance} alt="dummy" />
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
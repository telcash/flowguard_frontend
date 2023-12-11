import React from "react";
import './main-slider.css';
import Carousel from 'react-bootstrap/Carousel';
import { dataPreprocessingImg, dataTopologyImg, normalBehaviourLearnImg, realTimeDataImg, sensorsOptimizationImg, integrationTestImg, implementationMainteinance } from "../../assets/process_img";
import { useTranslation } from 'react-i18next';

const MainSlider = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__mainSlider">
            <Carousel slide={false} indicators={false}>
                <Carousel.Item>
                    <div className="fg__mainSlider-item">
                        <div className="fg__mainSlider-item_img">
                            <img src={dataPreprocessingImg} alt="dummy" />
                        </div>
                        <div className="fg__mainSlider-item_info">
                            <h3>{t("project-plan.step1.title")}</h3>
                            <p>{t("project-plan.step1.description")}</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="fg__mainSlider-item">
                        <div className="fg__mainSlider-item_img">
                            <img src={dataTopologyImg} alt="dummy" />
                        </div>
                        <div className="fg__mainSlider-item_info">
                            <h3>{t("project-plan.step2.title")}</h3>
                            <p>{t("project-plan.step2.description")}</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="fg__mainSlider-item">
                        <div className="fg__mainSlider-item_img">
                            <img src={normalBehaviourLearnImg} alt="dummy" />  
                        </div>
                        <div className="fg__mainSlider-item_info">
                            <h3>{t("project-plan.step3.title")}</h3>
                            <p>{t("project-plan.step3.description")}</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="fg__mainSlider-item">
                        <div className="fg__mainSlider-item_img">
                            <img src={realTimeDataImg} alt="dummy" />
                        </div>
                        <div className="fg__mainSlider-item_info">
                            <h3>{t("project-plan.step4.title")}</h3>
                            <p>{t("project-plan.step4.description")}</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="fg__mainSlider-item">
                        <div className="fg__mainSlider-item_img">
                            <img src={sensorsOptimizationImg} alt="dummy" />
                        </div>
                        <div className="fg__mainSlider-item_info">
                            <h3>{t("project-plan.step5.title")}</h3>
                            <p>{t("project-plan.step5.description")}</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="fg__mainSlider-item">
                        <div className="fg__mainSlider-item_img">
                            <img src={integrationTestImg} alt="dummy" />
                        </div>
                        <div className="fg__mainSlider-item_info">
                            <h3>{t("project-plan.step6.title")}</h3>
                            <p>{t("project-plan.step6.description")}</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="fg__mainSlider-item">
                        <div className="fg__mainSlider-item_img">
                            <img src={implementationMainteinance} alt="dummy" />
                        </div>
                        <div className="fg__mainSlider-item_info">
                            <h3>{t("project-plan.step7.title")}</h3>
                            <p>{t("project-plan.step7.description")}</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainSlider;
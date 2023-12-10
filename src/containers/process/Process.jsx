import React from "react";
import './process.css';
import { MainSlider } from "../../components";
import { useTranslation } from 'react-i18next';

const Process = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__process">
            <h1>{t("project-plan.title")}</h1>
            <div className="fg__process-slider">
                <MainSlider></MainSlider>
            </div>
        </div>
    );
};

export default Process;
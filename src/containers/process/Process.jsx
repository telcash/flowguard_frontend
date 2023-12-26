import React from "react";
import './process.css';
import { ProcessSlider } from "../../components";
//import { useTranslation } from 'react-i18next';

const Process = () => {
    //const [t] = useTranslation("global");
    return (
        <div className="fg__process">
            <div className="fg__process-container">
                <h1>Implementación Paso a Paso de la Ciberseguridad con FlowGuard</h1>
                <div className="fg__process-container-slider">
                    <ProcessSlider></ProcessSlider>
                </div>
            </div>
        </div>
    );
};

export default Process;
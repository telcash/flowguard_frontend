/**
 * Componente contenedor del Slider que describe el proceso de trabajo de Flowguard
 */

import React from "react";
import './process.css';
import { ProcessSlider } from "../../components";

const Process = () => {
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
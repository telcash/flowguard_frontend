import React from "react";
import './flowguard.css';
import logo from "../../assets/logo.png";
import { checkIcon, dangerIcon } from '../../assets/bullets';

const Flowguard = () => {
    return (
        <div className="fg__flowguard">
            <div className="fg__flowguard-info">
                <div className="fg__flowguard-info-text-left">
                    <ul>
                        <li>
                            <img src={dangerIcon} alt="" />
                            <h6>Provee detección temprana y respuesta rápida a incidentes</h6>
                        </li>
                        <li>
                            <img src={dangerIcon} alt="" />
                            <h6>Blockchain ofrece un registro transparente e inmutable, reduce el riesgo de manipulación de datos en infraestructuras críticas y aumenta la resiliencia frente a ataques centralizados</h6>
                        </li>
                        <li>
                            <img src={dangerIcon} alt="" />
                            <h6>Ofrece documentación y reportes conforme a NIS2  (Network and Information Security Directive) y análisis en tiempo real para auditoría y evaluación de seguridad</h6>
                        </li>
                    </ul>
                </div>
                <div className="fg__flowguard-info-logo">
                    <img src={logo} alt="" />
                    <div className="shine-overlay"></div>
                </div>
                <div className="fg__flowguard-info-text-right">
                    <ul>
                        <li>
                            <img src={checkIcon} alt="" />
                            <h6>Predice anomalías funcionales en los procesos que perjudiquen a la producción y a la seguridad</h6>
                        </li>
                        <li>
                            <img src={checkIcon} alt="" />
                            <h6>Se integra con las tecnologías de gestión de procesos: PLCs y SCADAS, permitiendo un rápido despliegue de la herramienta</h6>
                        </li>
                        <li>
                            <img src={checkIcon} alt="" />
                            <h6>Analiza en tiempo real los patrones óptimos de funcionamiento, detectando alteraciones de estos en caso de Ciberataque</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Flowguard;
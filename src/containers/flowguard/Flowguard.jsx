import React from "react";
import './flowguard.css';
import logo from "../../assets/logo.png";

const Flowguard = () => {
    return (
        <div className="fg__flowguard">
            <div className="fg__flowguard-header">
                <h2>FLOWGUARD</h2>
                <p>
                Es una herramienta informática formada por las tecnologías de Ciberseguridad NIS2, Inteligencia Artificial y Blockchain,
                destinada a proteger de Ciberataques a las infraestructuras críticas en los sectores del Agua, Energía y Espacios públicos
                </p> 
            </div>
            <div className="fg__flowguard-info">
                <div className="fg__flowguard-info-text-left">
                    <ul>
                        <li>Provee detección temprana y respuesta rápida a incidentes.</li>
                        <li>Blockchain ofrece un registro transparente e inmutable, reduce el riesgo de manipulación de datos en infraestructuras críticas y aumenta la resiliencia frente a ataques centralizados</li>
                        <li>Ofrece documentación y reportes conforme a NIS2  (Network and Information Security Directive) y análisis en tiempo real para auditoría y evaluación de seguridad</li>
                    </ul>
                </div>
                <div className="fg__flowguard-info-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="fg__flowguard-info-text-right">
                    <ul>
                        <li>Predice anomalías funcionales en los procesos que perjudiquen a la producción y a la seguridad</li>
                        <li>Se integra con las tecnologías de gestión de procesos: PLCs y SCADAS, permitiendo un rápido despliegue de la herramienta</li>
                        <li>Analiza en tiempo real los patrones óptimos de funcionamiento, detectando alteraciones de estos en caso de Ciberataque</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Flowguard;
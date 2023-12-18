import React from "react";
import './flowguard.css';
import logo from "../../assets/logo.png";

const Flowguard = () => {
    return (
        <div className="fg__flowguard">
            <div className="fg__flowguard-header">
                <h2>FLOWGUARD</h2>
                <p>
                    Flowguard es una potente herramienta informática SaaS formada por las tecnologías de Ciberseguridad NIS2, Inteligencia Artificial y Blockchain  
                </p> 
            </div>
            <div className="fg__flowguard-info">
                <div className="fg__flowguard-info-text-left">
                    <ul>
                        <li>Flowguard está destinada a ser la tecnología que protege de Ciberataques a las infraestructuras críticas en los sectores del Agua, Energía y Espacios públicos</li>
                        <li>Integrable con las tecnologías de gestión de procesos: PLCs y SCADAS: escalabilidad total</li>
                        <li>Predicción de anomalías funcionales de los procesos que perjudiquen a la producción y a la seguridad</li>
                    </ul>
                </div>
                <div className="fg__flowguard-info-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="fg__flowguard-info-text-right">
                    <ul>
                        <li>Flowguard está destinada a ser la tecnología que protege de Ciberataques a las infraestructuras críticas en los sectores del Agua, Energía y Espacios públicos</li>
                        <li>Integrable con las tecnologías de gestión de procesos: PLCs y SCADAS: escalabilidad total</li>
                        <li>Predicción de anomalías funcionales de los procesos que perjudiquen a la producción y a la seguridad</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Flowguard;
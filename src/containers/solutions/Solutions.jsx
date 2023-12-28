/**
 * Slider contenedor de la sección de preocupaciones y soluciones
 */

import React from "react";
import './solutions.css';
import { Neurons } from '../../components';
import logo from "../../assets/logo.png";
import { checkIcon, dangerIcon } from '../../assets/bullets';

const Solutions = () => {
    return (
        <div className="fg__solutions">
            <div className="fg__solutions-title">
                <h2>Asegurar el agua: preocupaciones y soluciones de Flowguard</h2>
            </div>
            <div className="fg__solutions-info">
                <div className="fg__solutions-info-text-left">
                    <ul>
                        <li>
                            <img src={dangerIcon} alt="" />
                            <h6>El Informe de Riesgos Globales del Foro Económico Mundial ha identificado consistentemente las amenazas cibernéticas a la infraestructura crítica, incluidos los sistemas de agua, como una importante preocupación global</h6>
                        </li>
                        <li>
                            <img src={dangerIcon} alt="" />
                            <h6>La Asociación Estadounidense de Obras Hidráulicas (AWWA) destacó en un informe de 2020 que muchas empresas de agua todavía utilizan sistemas de control antiguos, que podrían ser vulnerables a amenazas cibernéticas debido a la tecnología obsoleta y la falta de medidas de seguridad</h6>
                        </li>
                        <li>
                            <img src={dangerIcon} alt="" />
                            <h6>El Water Information Sharing & Analysis Center ha observado casos de incidentes de ciberseguridad en el sector del agua como resultado de errores humanos, incluidos ataques de phishing y acciones no intencionadas por parte de los empleados</h6>
                        </li>
                    </ul>
                </div>
                <div className="fg__solutions-info-logo">
                    <img src={logo} alt="" />
                    <div className="shine-overlay"></div>
                </div>
                <div className="fg__solutions-info-text-right">
                    <ul>
                        <li>
                            <img src={checkIcon} alt="" />
                            <h6>Flowguard es una herramienta informática avanzada, formada por las tecnologías de Ciberseguridad NIS2, Inteligencia Artificial y Blockchain, destinada a proteger de ciberataques a las infraestructuras críticas en los sectores del Agua, Energía y Espacios públicos</h6>
                        </li>
                        <li>
                            <img src={checkIcon} alt="" />
                            <h6>Flowguard se beneficia del uso de Redes Neuronales de Grafos, para analizar las relaciones y dependencias entre los diferentes elementos de los sistemas de gestión de agua, como sensores, bombas y válvulas, además se integra en la red de procesos a través de diversos drives de comunicaciones estandarizados por los principales fabricantes de autómatas programables, SCADAS y elementos de comunicaciones</h6>
                        </li>
                        <li>
                            <img src={checkIcon} alt="" />
                            <h6>El uso de la Blockchain ofrece un registro transparente e inmutable de los datos, facilita la trazabilidad de incidentes, aumenta la resiliencia frente a ataques centralizados y protege contra accesos no autorizados</h6>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='fg__solutions-background'>
                <Neurons></Neurons>
            </div>
        </div>
    );
};

export default Solutions;
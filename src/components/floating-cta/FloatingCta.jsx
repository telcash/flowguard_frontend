/**
 * Componente de ícono flotante para contacto
 */

import React, { useState } from "react";
import './floating-cta.css';
import { CtaForm } from '../../components';
import messageIcon from '../../assets/message.png';

const FloatingCta = () => {
    const [isFormVisible, setFormVisible] = useState(false);

    const handleClick = () => {
        setFormVisible(true);
    }

    const hideForm = () => {
        setFormVisible(false);
    };

    return (
        <div className="fg__floatingCta">
            <button className="fg_floatingCta-button jello-horizontal" onClick={handleClick}>
                <img src={messageIcon} alt="" />
            </button>
            {isFormVisible && (
            <div className="fg__hero-cta-form">
              <CtaForm onClose={hideForm} />
            </div>
          )}
        </div>
    );
};

export default FloatingCta;
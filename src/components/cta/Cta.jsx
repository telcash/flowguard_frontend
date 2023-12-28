/**
 * Componente que contiene el formulario de llamada a acción
 * El formulario solo contiene un campo para correo electrónico y un botón para enviar
 * El envío de formulario invoca el formulario de contacto
 */

import React, { useState } from "react";
import './cta.css';

const Cta = ({data}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        data(email);
    };

    return (
        <div className="fg__cta">
            <form className="fg__cta-form" onSubmit={handleSubmit}>
                <input id="email" type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">
                    Contáctanos
                </button>
            </form>
        </div>
    );
};

export default Cta;
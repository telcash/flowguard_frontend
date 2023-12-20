import React, { useState } from "react";
import './cta.css';

const Cta = ({buttonColor, buttonTextColor}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="fg__cta">
            <form className="fg__cta-form" onSubmit={handleSubmit}>
                <input id="email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" 
                    style={{
                        backgroundColor: buttonColor,
                        color: buttonTextColor
                    }}>
                        Contacto
                </button>
            </form>
        </div>
    );
};

export default Cta;
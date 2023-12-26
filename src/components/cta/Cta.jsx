import React, { useState } from "react";
import './cta.css';

const Cta = ({buttonColor, buttonTextColor, data}) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        data(email);
    };

    return (
        <div className="fg__cta">
            <form className="fg__cta-form" onSubmit={handleSubmit}>
                <input id="email" type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" 
                    style={{
                        backgroundColor: buttonColor,
                        color: buttonTextColor
                    }}>
                        Contáctanos
                </button>
            </form>
        </div>
    );
};

export default Cta;
/**
 * Componente para mostrar el logo de un partner
 * Muestra un logo en gris y un logo en color en hover
 * Redirige a la dirección web del partner
 */

import React, {useState} from "react";
import './partner-logo.css'

const PartnerLogo = ({name, logoGray, logoColor, url}) => {
    const [hover, setHover] = useState(false);
    return (
        <div className="fg__partnerLogo"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <a href={url} target="blank">
                <img src={hover ? logoColor : logoGray} alt={name} />
            </a>
        </div>
    );
};

export default PartnerLogo;
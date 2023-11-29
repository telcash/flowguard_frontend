import React from "react";
import './partners.css';
import neoradixLogo from '../../assets/neoradix-gray.png';
import airtraceLogo from '../../assets/airtrace-gray.png';

const Partners = () => {
    return (
        <div className="fg__partners">
            <a href="https://airtrace.io" target="blank">
                <img src={airtraceLogo} alt="logo airtrace" />
            </a>
            <a href="https://neoradixsolutions.com" target="blank">
                <img src={neoradixLogo} alt="logo neoradix" />
            </a>
        </div>
    );
};

export default Partners;
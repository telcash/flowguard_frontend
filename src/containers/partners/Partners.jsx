import React from "react";
import './partners.css';
import neoradixLogo from '../../assets/neoradix-gray.png';
import airtraceLogo from '../../assets/airtrace-gray.png';
import { useTranslation } from 'react-i18next';

const Partners = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__partners">
            <h1>{t("partners.title")}</h1>
            <div className="fg__partners-logos">
                <a href="https://airtrace.io" target="blank">
                    <img src={airtraceLogo} alt="logo airtrace" />
                </a>
                <a href="https://neoradixsolutions.com" target="blank">
                    <img src={neoradixLogo} alt="logo neoradix" />
                </a>
            </div>
        </div>
    );
};

export default Partners;
/**
 * Componente contenedor de los logos de los socios
 */

import React from "react";
import './partners.css';
import { PartnerLogo } from "../../components";
import { airtraceLogoGray, airtraceLogoColor, neoradixLogoGray, neoradixLogoColor, securitLogoGray, securitLogoColor } from '../../assets/partners_img';
import { useTranslation } from 'react-i18next';

const Partners = () => {
    const [t] = useTranslation("global");
    return (
        <div className="fg__partners">
            <h1>{t("partners.title")}</h1>
            <div className="fg__partners-logos">
                <div className="fg__partners-logos-logo">
                    <PartnerLogo
                        name={'Airtrace'}
                        logoGray={airtraceLogoGray}
                        logoColor={airtraceLogoColor}
                        url={"https://airtrace.io"}
                    />
                </div>
                <div className="fg__partners-logos-logo">
                    <PartnerLogo
                        name={'Neoradix'}
                        logoGray={neoradixLogoGray}
                        logoColor={neoradixLogoColor}
                        url={"https://neoradixsolutions.com"}
                    />
                </div>
                <div className="fg__partners-logos-logo">
                    <PartnerLogo
                        name={'Securit'}
                        logoGray={securitLogoGray}
                        logoColor={securitLogoColor}
                        url={"https://securit-project.eu"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Partners;
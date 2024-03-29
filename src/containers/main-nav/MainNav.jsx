/**
 * Barra de navegación principal de la página
 */

import React, { useState } from 'react';
import './main-nav.css';
import logo from '../../assets/logo.png';
import navIcon from '../../assets/nav-icon.png';
import { useTranslation } from 'react-i18next';
import { CtaForm } from "../../components";

const MainNav = () => {
    const [t] = useTranslation("global");
    const [expanded, setExpanded] = useState(false);
    const [isFormVisible, setFormVisible] = useState(false);

    const showForm = () => {
        setFormVisible(true);
    };

    const hideForm = () => {
        setFormVisible(false);
    };
    return (
        <div className={`fg__mainnav ${expanded ? 'fullscreen' : ''}`}>
            <div className='fg__mainnav-container'>
                <div className='fg__mainnav-actions'>
                    <div className='fg__mainnav-navbutton' onClick={() => setExpanded(!expanded)}>
                        <img src={navIcon} alt='logo' />
                    </div>
                    <a href='#hero' className='fg__mainnav-logo_container' onClick={() => setExpanded(false)}>
                        <img src={logo} alt='logo' />
                        <span>Flowguard</span>
                    </a>
                </div>
                <div className={`fg__mainnav-links ${expanded ? 'expanded' : ''}`}>
                    <a href='#solutions' onClick={() => setExpanded(false)}>Soluciones</a>
                    <a href='#features' onClick={() => setExpanded(false)}>{t("main-nav.links.why")}</a>
                    <a href='#process' onClick={() => setExpanded(false)}>{t("main-nav.links.process")}</a>
                    <a href='#partners' onClick={() => setExpanded(false)}>{t("main-nav.links.partners")}</a>
                    <a href='#/' onClick={() => showForm()}>Contáctanos</a>
                </div>
            </div>
            {isFormVisible && (
            <div className="fg__hero-cta-form">
              <CtaForm onClose={hideForm} />
            </div>
          )}
        </div>
    )
}

export default MainNav;
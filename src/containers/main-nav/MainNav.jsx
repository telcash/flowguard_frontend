import React, { useState } from 'react';
import './main-nav.css';
import logo from '../../assets/logo.png';
import navIcon from '../../assets/nav-icon.png';
import { useTranslation } from 'react-i18next';
//import esIcon from '../../assets/spain-flag.png';
//import enIcon from '../../assets/great-britain.png';

const MainNav = () => {
    const [t] = useTranslation("global");
    const [expanded, setExpanded] = useState(false);
    return (
        <div className={`fg__mainnav ${expanded ? 'fullscreen' : ''}`}>
            <div className='fg__mainnav-container'>
                <div className='fg__mainnav-actions'>
                    <div className='fg__mainnav-navbutton' onClick={() => setExpanded(!expanded)}>
                        <img src={navIcon} alt='logo' />
                    </div>
                    <div className='fg__mainnav-logo_container'>
                        <img src={logo} alt='logo' />
                        <span>Flowguard</span>
                    </div>
                </div>
                <div className={`fg__mainnav-links ${expanded ? 'expanded' : ''}`}>
                    {/* <div className='fg__mainnav-links_languages'>
                        <button onClick={() => i18n.changeLanguage("es")}>
                            <img src={esIcon} alt="español" />
                        </button>
                        <button onClick={() => i18n.changeLanguage("en")}>
                            <img src={enIcon} alt="english" />
                        </button>
                    </div> */}
                    <a href='#features' onClick={() => setExpanded(false)}>{t("main-nav.links.why")}</a>
                    <a href='#partners' onClick={() => setExpanded(false)}>{t("main-nav.links.partners")}</a>
                    <a href='#process' onClick={() => setExpanded(false)}>{t("main-nav.links.process")}</a>
                    <a href='#footer' onClick={() => setExpanded(false)}>{t("main-nav.links.contact")}</a>
                </div>
            </div>
        </div>
    )
}

export default MainNav;
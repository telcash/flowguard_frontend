import React from 'react';
import './main-nav.css';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';
import esIcon from '../../assets/spain-flag.png';
import enIcon from '../../assets/great-britain.png';

const MainNav = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className='fg__mainnav'>
            <div className='fg__mainnav-container'>
                <div className='fg__mainnav-logo_container'>
                    <img
                        src={logo}
                        alt='logo' 
                    />
                    <span>Flowguard</span>
                </div>
                <div className='fg__mainnav-links'>
                    {/* <div className='fg__mainnav-links_languages'>
                        <button onClick={() => i18n.changeLanguage("es")}>
                            <img src={esIcon} alt="español" />
                        </button>
                        <button onClick={() => i18n.changeLanguage("en")}>
                            <img src={enIcon} alt="english" />
                        </button>
                    </div> */}
                    <a href='#features'>{t("main-nav.links.why")}</a>
                    <a href='#partners'>{t("main-nav.links.partners")}</a>
                    <a href='#process'>{t("main-nav.links.process")}</a>
                    <a href='#footer'>{t("main-nav.links.contact")}</a>
                </div>
            </div>
        </div>
    )
}

export default MainNav;
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
                    <div className='fg__mainnav-links_languages'>
                        <button onClick={() => i18n.changeLanguage("es")}>
                            <img src={esIcon} alt="español" />
                        </button>
                        <button onClick={() => i18n.changeLanguage("en")}>
                            <img src={enIcon} alt="english" />
                        </button>
                    </div>
                    <a href='/index#features'>{t("header.main-nav.link1")}</a>
                    <a href='#partners'>{t("header.main-nav.link2")}</a>
                    <a href='#footer'>{t("header.main-nav.link3")}</a>
                </div>
            </div>
        </div>
    )
}

export default MainNav;
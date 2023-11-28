import React from 'react';
import './main-nav.css';
import logo from '../../assets/logo.png';
import { useTranslation } from 'react-i18next';

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
                    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
                    <button onClick={() => i18n.changeLanguage("en")}>EN</button>
                    <a href='#s1'>{t("header.main-nav.link1")}</a>
                    <a href='#s2'>{t("header.main-nav.link2")}</a>
                    <a href='#s3'>{t("header.main-nav.link3")}</a>
                </div>
            </div>
        </div>
    )
}

export default MainNav;
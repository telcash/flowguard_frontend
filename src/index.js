import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json';
import global_en from './translations/en/global.json';

i18next.init({
    interpolation: { escapeValue: false},
    lng: "es",
    fallbackLng: "es",
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
});

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>
);
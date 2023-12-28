/**
 * Componente principal de la aplicación.
 * Contiene los distintos containers que conforman la página
 */

import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { MainNav, Solutions, Features, Partners, Footer, HeroSection, Process } from './containers';
import { FloatingCta } from './components';

const App = () => {

    // Referencia del componente Footer
    const footerRef = useRef(null);

    // Referencia del componente HeroSection
    const heroRef = useRef(null);

    // State que controla si el formulario de contacto es visible o no
    const [showFloatingCta, setShowFloatingCta] = useState(false);

    /**
     * Use effect para controlar la visibilidad del ícono flotante de contacto que se observa en dispositivos móviles
     */
    useEffect(() => {

        /**
         * Función que determina si alguna parte de un elemento se está mostrando en pantalla
         * @param {*} element // Elemento a determinar visibilidad
         * @returns 
         */
        const isElementVisible = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.bottom > 0 &&
                rect.right > 0 &&
                rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
                rect.top < (window.innerHeight || document.documentElement.clientHeight)
              );
        };

        // Variables para calcular si los elementos Footer y HeroSection se están mostrando en pantalla
        const isFooterVisible = () => isElementVisible(footerRef.current);
        const isHeroVisible = () => isElementVisible(heroRef.current);

        // Hace visible el ícono de contacto solo si no están en pantalla el elemento Footer y el elemento HeroSection
        setShowFloatingCta(!(isFooterVisible() || isHeroVisible()));

        // Función que maneja los eventos de scroll, para determinar si el ícono de contacto es visible o no
        const handleScroll = () => {
            const isVisible = !(isFooterVisible() || isHeroVisible());
            setShowFloatingCta(isVisible);
        }

        // Agrega el listener para 'scroll'
        window.addEventListener('scroll', handleScroll);

        // Retorno de useEffect para limpiar listene
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    // Documento Html que retorna App, con la estructura principal de la página
    return (
        <div className='app'>
            <nav>
                <MainNav />
            </nav>
            <main>
                <section id='hero' ref={heroRef}>
                    <HeroSection />
                </section>
                <section id='solutions'>
                    <Solutions />
                </section>
                <section id='features'>
                    <Features />
                </section>
                <section id='process'>
                    <Process />
                </section>
                <section id='partners'>
                    <Partners />
                </section>
            </main>
            <footer id='footer' ref={footerRef}>
                <Footer/>
            </footer>
            {showFloatingCta && (
                <FloatingCta />
            )}
        </div>
    );
};

export default App;
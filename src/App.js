import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { MainNav, Solutions, Features, Partners, Footer, HeroSection, Process } from './containers';
import { FloatingCta } from './components';

const App = () => {
    const footerRef = useRef(null);
    const heroRef = useRef(null);
    const [showFloatingCta, setShowFloatingCta] = useState(false);
    useEffect(() => {
        const isElementVisible = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.bottom > 0 &&
                rect.right > 0 &&
                rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
                rect.top < (window.innerHeight || document.documentElement.clientHeight)
              );
        };
        const isFooterVisible = () => isElementVisible(footerRef.current);
        const isHeroVisible = () => isElementVisible(heroRef.current);
        setShowFloatingCta(!(isFooterVisible() || isHeroVisible()));
        const handleScroll = () => {
            const isVisible = !(isFooterVisible() || isHeroVisible());
            setShowFloatingCta(isVisible);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
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
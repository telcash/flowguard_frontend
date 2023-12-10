import React from 'react';
import './App.css';
import { MainNav, Features, Partners, Footer, HeroSection, Process } from './containers';

const App = () => (
    <div className='app'>
        <nav>
            <MainNav />
        </nav>
        <main>
            <section id='hero'>
                <HeroSection />
            </section>
            <section id='features'>
                <Features />
            </section>
            <section>
                <Process />
            </section>
            <section id='partners'>
                <Partners />
            </section>
        </main>
        <footer id='footer'>
            <Footer/>
        </footer>
    </div>
);

export default App;
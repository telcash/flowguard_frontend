import React from 'react';
import './App.css';
import { MainNav, Flowguard, Features, Partners, Footer, HeroSection, Process } from './containers';

const App = () => (
    <div className='app'>
        <nav>
            <MainNav />
        </nav>
        <main>
            <section id='hero'>
                <HeroSection />
            </section>
            <section>
                <Flowguard />
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
        <footer id='footer'>
            <Footer/>
        </footer>
    </div>
);

export default App;
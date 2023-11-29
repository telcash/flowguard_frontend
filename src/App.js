import React from 'react';
import './App.css';
import { MainNav, Features, Team, Footer, HeroSection } from './containers';

const App = () => (
    <div className='app'>
        <nav>
            <MainNav />
        </nav>
        <main>
            <HeroSection />
            <Features />
            <Team />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;
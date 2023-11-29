import React from 'react';
import './App.css';
import { MainNav, Features, Partners, Footer, HeroSection } from './containers';

const App = () => (
    <div className='app'>
        <nav>
            <MainNav />
        </nav>
        <main>
            <HeroSection />
            <Features />
            <Partners />
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
);

export default App;
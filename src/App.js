import React from 'react';
import './App.css';
import { Header, Features, Team, Footer, HeroSection } from './containers';

const App = () => (
    <div className='App'>
        <Header />
        <HeroSection />
        <Features />
        <Team />
        <Footer />
    </div>
);

export default App;
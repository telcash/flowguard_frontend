import React from 'react';
import './App.css';
import { Header, Features, Team, Footer } from './containers';

const App = () => (
    <div className='App'>
        <Header />
        <Features />
        <Team />
        <Footer />
    </div>
);

export default App;
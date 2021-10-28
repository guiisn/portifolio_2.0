import React from 'react';

import Header from './components/Header/index';
import Home from './components/Home/index';
import AboutMe from './components/AboutMe/index';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './index.css';

function App() {
    return (
        <body className="w-full h-screen bg-primary">
            <Header />
            <Home />
            <AboutMe />
            <Technologies />
            <Projects />
            <Contact />
            {/* <footer className="flex items-center justify-center p-5 text-sm text-center border-t bg-primary border-tertiary text-texts">
                Guilherme Nunes | Dev FullStack, 2021.
            </footer> */}
            <footer className="flex items-center justify-center p-5 text-sm text-center border-t bg-primary border-tertiary text-texts footer">
                <h2>Guilherme Nunes | Dev FullStack, 2021.</h2>
            </footer>
        </body>
    );
}

export default App;

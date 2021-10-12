import React from 'react';

import Home from './components/Home/index';
import AboutMe from './components/AboutMe/index';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="w-full h-screen bg-primary">
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
      <footer className='flex items-center justify-center p-5 text-sm text-center border-t bg-primary border-tertiary text-texts'>
        Guilherme Nunes | Dev FullStack, 2021.
      </footer>
    </div>
  );
}

export default App;

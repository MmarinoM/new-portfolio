import './App.scss';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Footer from './Components/Footer/Footer';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

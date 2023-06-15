import React from 'react';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Experience from './components/Experience/Experience.jsx';
import Services from './components/Services/Services.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
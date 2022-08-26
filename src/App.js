import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import heroImg from "./assets/hero-background.jpg";


function App() {
  const navbarLinks = [
    { url: "#home", title: "Home" },
    { url: "#about", title: "About Me" },
    { url: "#skills", title: "Skills" },
    // {url:"#",title:"Education"},
    // {url:"#",title:"Experience"},
    { url: "#projects", title: "Projects" },
    { url: "#contact", title: "Contact" }
  ]
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar navbarLinks={navbarLinks} />
        <Hero imageSrc={heroImg} />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

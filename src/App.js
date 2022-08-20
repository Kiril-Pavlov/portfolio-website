import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

import heroImg from "./assets/hero-background.jpg";

function App() {
  const navbarLinks = [
    {url:"#",title:"Home"},
    {url:"#",title:"About Me"},
    {url:"#",title:"Skills"},
    {url:"#",title:"Education"},
    {url:"#",title:"Experience"},
    {url:"#",title:"Projects"},
    {url:"#",title:"Contact"}
  ]
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks}/>
      <Hero imageSrc={heroImg}/>
      <About />
      <Skills />

      <Footer />
    </div>
  );
}

export default App;

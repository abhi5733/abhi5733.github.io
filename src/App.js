import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contact from './Components/Contact';
import { useRef } from 'react';
import Github from './Components/Github';

function App() {





  return (
    <>
    
      <Navbar/>
      <Home/>
      <About/>
      <Github/>
      <Project/>
    </>
  );
}

export default App;

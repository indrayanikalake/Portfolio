import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Tech from './components/Tech';
import { BrowserRouter } from "react-router-dom";
import About from './components/About'
import  Experience  from "./components/Experience";
import  Works  from "./components/Works";
import  Feedbacks from "./components/Feedbacks";
import  Contact  from "./components/Contact";

import StarsCanvas from "./components/canvas/Stars";


const App = () => {

  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary" >
      <div className=" relative z-0 bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar />
    <Hero />
    <StarsCanvas />
    </div>
    <About />
   
    <Tech />
  
   <Works />
   
    <div className="relative z-0">
    <Contact />
    
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

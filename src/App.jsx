/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter } from'react-router-dom';

import {About, Contact, Experience , StarsCanvas ,  Hero, Navbar, Tech, Works} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero />
        </div>
        <About />
        <div className = 'relative z-0'>   
        
         <Tech />
        <StarsCanvas/>
        </div> 
       
        <Experience />
        <Works />
        
        <div className = 'relative z-0'>   
        
        <Contact/>
        <StarsCanvas/>
        </div>    
      </div>
    </BrowserRouter>
    
  )
}

export default App
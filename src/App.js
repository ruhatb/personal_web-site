
import './App.css';
import Headers from './layout/Headers'; 
import Heros from './layout/Heros';
import { Information } from './layout/Information';
import Skills from './layout/Skills';
import Projects from './layout/Projects';
import Footers from './layout/Footers';

function App() {
  return (
    <div> 
        
    <div> 
      <Headers />
     <Heros />
      </div>
      
       <div className='bg-gray-400  w-[1440px] flex flex-col items-center  '>   
      <Skills />  
      </div>
      <Information />
      <Projects />
      <Footers />
    
      </div>
     
      
       
  
  );
}

export default App;

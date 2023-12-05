import { FaMoon, FaSun } from 'react-icons/fa';

import { useState } from 'react';

import './style.css';
    

const Headers = () => {

    const [darkMode, setDarkMode ] = useState(false);
    const toogleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (  
    <header className='overflow-visible bg-gradient-to-r from-blue-900 to-green-900 custom-gradient  w-[1440px] h-[671px]' > 
       
    <nav className='py-12 pl-40 mb-12 flex justify-between items-center'>
       <h1 className='text-xl' >Ruhat BAŞTU</h1>
       
       <label className='pr-5 flex items-center' >  
       <input  type="radio" onClick={toogleDarkMode} checked={darkMode} />
        <div className='cursor-pointer pr-10' > {darkMode ? <FaMoon  size={20}  color="gray" /> : <FaSun  size= {20} color="orange"/>} </div>
        </label>
        </nav>
        
    </header> 
    
);
};

export default Headers; 
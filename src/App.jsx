import React from 'react'
import './App.css'
import MainImage from './components/MainImage'
import Navbar from './components/Navbar'
import NavbarSmall from './components/NavbarSmall';
import { useState, useEffect } from "react";
import PopularDestinations from './components/PopularDestinations';

function App() {
  
  const [isSmall, setIsSmall] = useState(window.innerWidth <= 1028);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 1028);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <MainImage/>
      {(isSmall) ? <NavbarSmall/> : <Navbar/>}
      <PopularDestinations/>
    </>
  )
}

export default App

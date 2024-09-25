import React from 'react'
import '../App.css'
import MainImage from './MainImage'
import Navbar from './Navbar'
import NavbarSmall from './NavbarSmall';
import { useState, useEffect } from "react";
import PopularDestinations from './PopularDestinations';
import RecentTrips from './RecentTrips';
import BottomSection from './BottomSection';

export default function Home() {
  
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
      <RecentTrips/>
      <BottomSection/>
    </>
  )
}
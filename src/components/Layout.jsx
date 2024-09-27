import React from 'react';
import Navbar from './Navbar'; 
import NavbarSmall from './NavbarSmall';
import BottomSection from './BottomSection';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {

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
    <div>
      {(isSmall) ? <NavbarSmall/> : <Navbar/>}
      <main><Outlet/></main> 
      <BottomSection/> 
    </div>
  );
};

export default Layout;
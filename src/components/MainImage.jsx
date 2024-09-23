import React from "react";
import { useState, useEffect } from "react";

function MainImage() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return(
    <div className="main-image-div">
      <h1>Your Journey{isMobile ? <br /> : " "}Your Story</h1>
      <p>Choose Your Favourite Destination</p>
      <button>Travel Plan</button>
    </div>
  )
}

export default MainImage
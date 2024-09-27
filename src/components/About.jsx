import React from 'react';
import '../App.css'
import FrontImage from './FrontImage';
import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import NavbarSmall from './NavbarSmall';
import Paragraph from './Paragraph';
import BottomSection from './BottomSection';

export default function About() {

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

  return(
    <>
      <FrontImage bgImage="./src/images/lanterns.jpg" pageTitle="About" fontSize='3rem' letterSpacing='0.2rem'/>
      {(isSmall) ? <NavbarSmall/> : <Navbar/>}
      <div className="about-container">
        <div className="about-paragraphs">
          <Paragraph title="Our History" desc="Etiam orci libero, pretium id commodo vel, consectetur sit amet urna. Fusce non nunc luctus, semper quam nec, varius sapien. Pellentesque ac viverra neque. Phasellus sodales vestibulum nibh. Nunc ut eros accumsan arcu imperdiet ornare a eu dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In placerat tempus varius. Donec ac ornare enim. Nulla viverra a dolor nec tincidunt. Maecenas et augue at neque cursus eleifend mattis vel enim. Phasellus eu tristique ligula. Mauris vel urna sit amet diam posuere egestas. Aliquam erat volutpat. Mauris ac gravida libero."/>
          <Paragraph title="Our Mission" desc="Maecenas id orci ante. Mauris vel sagittis urna. Nullam vel placerat nunc. Nulla congue elit sed nisi ullamcorper, non tristique ipsum consequat. Cras finibus tempor enim sit amet varius. Sed eu purus imperdiet, tempus erat in, rhoncus orci. Curabitur pretium ut mi mattis molestie. Fusce mattis sed lectus et vulputate."/>
          <Paragraph title="Our Vision" desc="Curabitur eleifend convallis purus pharetra accumsan. Maecenas pharetra sapien at vestibulum ullamcorper. Ut euismod lobortis eleifend. Donec id tempus urna, sed tempor justo. In quis velit in sem hendrerit placerat eu sit amet magna. Fusce accumsan enim ac semper fringilla. Nam elementum eleifend tempor. Phasellus et mauris eget eros blandit aliquet ut eu magna. Phasellus aliquam lacus ipsum, quis dictum sem bibendum tempor."/>
        </div>
      </div>
      <BottomSection/>
    </>
  )
}
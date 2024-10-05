import React from "react";
import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

function ExpandedNavbarSmall() {

  // function showText() {
  //   document.querySelector(".main-image-div h1").style.opacity = 1;
  //   document.querySelector(".main-image-div p").style.opacity = 1;
  //   document.querySelector(".main-image-div button").style.opacity = 1;
  // }

  // const handleHideExpanded = () => {
  //   setShowExpanded(false);
  //   showText();

  // };

  return(
    <div className="expanded-navbar-small">
      <div style={{opacity:'0'}}>abc</div>
      <a href="http://localhost:5173/"><IoMdHome /> Home</a>
      <a href="http://localhost:5173/about"><IoInformationCircleSharp /> About</a>
      <a href="http://localhost:5173/service"><FaBriefcase /> Service</a>
      <a href="http://localhost:5173/contact"><IoMdContact /> Contact</a>
      <button>Sign Up</button>
    </div>
  )
}

export default ExpandedNavbarSmall
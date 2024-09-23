import React from "react";
import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

function ExpandedNavbarSmall({setShowExpanded}) {

  function showText() {
    document.querySelector(".main-image-div h1").style.opacity = 1;
    document.querySelector(".main-image-div p").style.opacity = 1;
    document.querySelector(".main-image-div button").style.opacity = 1;
  }

  const handleHideExpanded = () => {
    setShowExpanded(false);
    showText();

  };

  return(
    <div className="expanded-navbar-small">
      <div className="expanded-navbar-small-top">
        <h1>Trippy</h1>
        <RxCross1 className="cross" onClick={handleHideExpanded}/>
      </div>
      <a><IoMdHome /> Home</a>
      <a><IoInformationCircleSharp /> About</a>
      <a><FaBriefcase /> Service</a>
      <a><IoMdContact /> Contact</a>
      <button>Sign Up</button>
    </div>
  )
}

export default ExpandedNavbarSmall
import React from "react";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function CollapsedNavbarSmall({setShowExpanded}) {

  function hideText() {
    document.querySelector(".main-image-div h1").style.opacity = 0;
    document.querySelector(".main-image-div p").style.opacity = 0;
    document.querySelector(".main-image-div button").style.opacity = 0;
  }

  const handleShowExpanded = () => {
    setShowExpanded(true);
    hideText();

  };

  return(
    <div className="collapsed-navbar-small">
      <h1>Trippy</h1>
      <RxHamburgerMenu className="hamburger-menu" onClick={handleShowExpanded}/>
    </div>
  )
}

export default CollapsedNavbarSmall
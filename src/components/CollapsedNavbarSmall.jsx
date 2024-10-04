import React from "react";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

function CollapsedNavbarSmall({toggleMenu}) {

  // function hideText() {
  //   document.querySelector(".main-image-div h1").style.opacity = 0;
  //   document.querySelector(".main-image-div p").style.opacity = 0;
  //   document.querySelector(".main-image-div button").style.opacity = 0;
  // }

  // const handleShowExpanded = () => {
  //   setShowExpanded(true);
  //   hideText();

  // };

  const [isHamburger, setIsHamburger] = useState(true)

  function handleClick() {
    setIsHamburger(!isHamburger);
    toggleMenu();
  }
  

  return(
    <div className="collapsed-navbar-small">
      <h1>Trippy</h1>
      {isHamburger ? <RxHamburgerMenu className="hamburger-menu" onClick={handleClick}/> : <RxCross1 className="cross" onClick={handleClick}/>}
    </div>
  )
}

export default CollapsedNavbarSmall
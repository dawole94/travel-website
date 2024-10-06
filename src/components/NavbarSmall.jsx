import React from "react";
import { useState, useEffect } from "react";
import CollapsedNavbarSmall from "./CollapsedNavbarSmall";
import ExpandedNavbarSmall from "./ExpandedNavbarSmall";

function NavbarSmall() {

  // const [showExpanded, setShowExpanded] = useState(false);

  // function toggleMenu() {
  //   setShowExpanded(!showExpanded)
  // }

  return(
    <>
      <CollapsedNavbarSmall/>
      {/* {showExpanded ? <ExpandedNavbarSmall/> : null} */}
      <ExpandedNavbarSmall/>
    </>
  )
}

export default NavbarSmall
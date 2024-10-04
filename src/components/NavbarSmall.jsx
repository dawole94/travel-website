import React from "react";
import { useState, useEffect } from "react";
import CollapsedNavbarSmall from "./CollapsedNavbarSmall";
import ExpandedNavbarSmall from "./ExpandedNavbarSmall";

function NavbarSmall() {

  const [showExpanded, setShowExpanded] = useState(false);
  
  function showExpandedMenu() {
    setShowExpanded(true);
  }

  function hideExpandedMenu() {
    setShowExpanded(false);
  }

  return(
    <>
      <CollapsedNavbarSmall showExpandedMenu={showExpandedMenu} hideExpandedMenu={hideExpandedMenu}/>
       {/*  showExpanded ? <ExpandedNavbarSmall setShowExpanded={setShowExpanded}/> : <CollapsedNavbarSmall setShowExpanded={setShowExpanded} className="collapsed"/>}  */
       }
       {
        showExpanded ? <ExpandedNavbarSmall/> : null
       }
    </>
  )
}

export default NavbarSmall
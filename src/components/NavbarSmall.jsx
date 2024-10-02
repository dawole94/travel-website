import React from "react";
import { useState } from "react";
import CollapsedNavbarSmall from "./CollapsedNavbarSmall";
import ExpandedNavbarSmall from "./ExpandedNavbarSmall";

function NavbarSmall() {

  const [showExpanded, setShowExpanded] = useState(false);

  return(
    <>
      {showExpanded ? <ExpandedNavbarSmall setShowExpanded={setShowExpanded}/> : <CollapsedNavbarSmall setShowExpanded={setShowExpanded}/>}
    </>
  )
}

export default NavbarSmall
import React from "react";
import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import CollapsedNavbarSmall from "./CollapsedNavbarSmall";
import ExpandedNavbarSmall from "./ExpandedNavbarSmall";
import { RxFace } from "react-icons/rx";

function NavbarSmall() {

  const [showExpanded, setShowExpanded] = useState(false);

  return(
    <>
      {showExpanded ? <ExpandedNavbarSmall setShowExpanded={setShowExpanded}/> : <CollapsedNavbarSmall setShowExpanded={setShowExpanded}/>}
    </>
  )
}

export default NavbarSmall
import React from "react";
import { useState, useEffect } from "react";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

function Navbar() {

  return(
    <div className="navbar">
      <h1 className="left">Trippy</h1>
      <div className="right">
        <ul>
          <li><a><IoMdHome /> Home</a></li>
          <li><a><IoInformationCircleSharp /> About</a></li>
          <li><a><FaBriefcase /> Service</a></li>
          <li><a><IoMdContact /> Contact</a></li>
        </ul>
        <button>Sign Up</button>
      </div>
      
    </div>
  )
}

export default Navbar
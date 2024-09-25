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
          <li><a href="http://localhost:5173/"><IoMdHome /> Home</a></li>
          <li><a href="http://localhost:5173/about"><IoInformationCircleSharp /> About</a></li>
          <li><a href="http://localhost:5173/service"><FaBriefcase /> Service</a></li>
          <li><a href="http://localhost:5173/contact"><IoMdContact /> Contact</a></li>
        </ul>
        <button>Sign Up</button>
      </div>
      
    </div>
  )
}

export default Navbar
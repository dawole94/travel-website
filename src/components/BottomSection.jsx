import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

export default function BottomSection() {
  return(
    <div className="bottom-section-background">
      <div className="bottom-section">
        <div className="bottom-section-high">
          <div className="left-part">
            <h1>Trippy</h1>
            <p>Choose your favourite destination.</p>
          </div>
          <div className="right-part">
            <FaFacebookSquare className="right-part-icon"/>
            <FaSquareInstagram className="right-part-icon"/>
            <FaBehanceSquare className="right-part-icon"/>
            <FaSquareTwitter className="right-part-icon"/>
          </div>
        </div>
        <div className="bottom-section-low">
          <div className="bottom-section-low-component">
            <h2>Project</h2>
            <p>Changelog</p>
            <p>Status</p>
            <p>Licence</p>
            <p>All Versions</p>
          </div>
          <div className="bottom-section-low-component">
            <h2>Community</h2>
            <p>GitHub</p>
            <p>Issues</p>
            <p>Project</p>
            <p>Twitter</p>
          </div>
          <div className="bottom-section-low-component">
            <h2>Help</h2>
            <p>Support</p>
            <p>Troubleshooting</p>
            <p>Contact Us</p>
          </div>
          <div className="bottom-section-low-component">
            <h2>Others</h2>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Licence</p>
          </div>
        </div>
      </div>
    </div>
  )
}
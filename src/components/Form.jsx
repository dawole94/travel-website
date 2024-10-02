import React from "react";

export default function Form() {
  return(
    <div className="form">
      <h1>Send a message to us!</h1>
      <div className="inputs-and-button">
        <input placeholder="Name" className="input-small"></input>
        <input placeholder="Email" className="input-small"></input>
        <input placeholder="Subject" className="input-small"></input>
        <textarea placeholder="Message" className="textarea"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  )
}
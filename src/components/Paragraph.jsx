import React from "react";

export default function Paragraph({title, desc}) {

  const divStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem'
  }

  const h1Styles = {
    fontSize: '2rem',
    fontWeight: 'bold'
  } 

  const pStyles = {
    fontSize: '1.25rem'
  }

  return(
    <div style={divStyles}>
      <h1 style={h1Styles}>{title}</h1>
      <p style={pStyles}>{desc}</p>
    </div>
  )
}
import React from 'react'

export default function FrontImage({bgImage, pageTitle, fontSize, letterSpacing, marginBottom}) {

  const bgStyles = {
    backgroundImage: `url(${bgImage})`,
    width: '100vw',
    height: '75vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: marginBottom
  }

  const pageTitleStyles = {
    color: 'white',
    fontSize: fontSize,
    fontWeight: 'bold',
    letterSpacing: letterSpacing
  }

  return(
    <div style={bgStyles} className="front-image-container">
      <p style={pageTitleStyles}>{pageTitle}</p>
    </div>
  )
}
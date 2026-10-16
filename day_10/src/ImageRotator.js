import React, { useState } from 'react'

const ImageRotator = () => {
  const imageUrl =
    
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80'
   

  // State to keep track of rotation angle in degrees
  const [rotation, setRotation] = useState(0)

  const handleRotateLeft = () => {
    setRotation(rotation - 90)
  }

  const handleRotateRight = () => {
    setRotation(rotation + 90)
  }

  return (
    <div className="rotator-container">
      <div className="header-banner">
        <h1>Image Rotator</h1>
      </div>
      <div className="content">
        <div className="img-frame">
          <img
            src={imageUrl}
            alt="Rotatable"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.3s ease'
            }}
            className="slider-img"
          />
        </div>
        <div className="button-group">
          <button onClick={handleRotateLeft}>Left</button>
          <button onClick={handleRotateRight}>Right</button>
        </div>
      </div>
    </div>
  )
}

export default ImageRotator
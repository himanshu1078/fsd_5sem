import React, { useState } from 'react'

const ImageSlider = () => {
  const images = [
    'https://images.unsplash.com/photo-1560717845-968823efbee1?w=400&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  return (
    <div className="slider-container">
      <header className="header-banner">
        <h1>ImageSlider</h1>
      </header>
      <div className="image-wrapper">
        <img
          src={images[currentIndex]}
          alt="Slider item"
          className="slider-image"
        />
        <div className="button-group">
          <button onClick={handlePrev}>Left</button>
          <button onClick={handleNext}>Right</button>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
import ImageRotator from './ImageRotator'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      {/* Counter App */}
      <div className="header-banner">
        <h1>Counter App</h1>
      </div>
      <div className="content">
        <h2>{count}</h2>
        <div className="button-group">
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>RESET</button>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>

      {/* Image Slider */}
      <ImageSlider />

      {/* Image Rotator */}
      <ImageRotator />
    </div>
  )
}

export default App 
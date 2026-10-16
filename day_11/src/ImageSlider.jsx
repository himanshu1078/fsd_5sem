
import React, { useState } from "react";

import mountain1 from "./71.jpeg";
import mountain2 from "./72.jpeg";
import mountain3 from "./73.jpeg";
import mountain4 from "./74.jpeg"; 

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const images = [
    mountain1,
    mountain2,
    mountain3,
    mountain4
  ];

  const nextImage = () => {
    setCurrent((current + 1) % images.length);
  };

  const previousImage = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div>
      <h2>Image Slider</h2>

      <img
        src={images[current]}
        alt="Mountain"
        width="600"
        height="400"
      />

      <br />
      <br />

      <button onClick={previousImage}>
        Previous
      </button>

      <button onClick={nextImage}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;


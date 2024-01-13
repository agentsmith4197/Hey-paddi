import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length, interval]);

  return <img src={images[currentIndex]} alt="Background" />;
};

export default ImageSlider;

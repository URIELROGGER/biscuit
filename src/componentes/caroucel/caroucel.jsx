import React, { useState } from "react";
import './caroucel.css';

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    require("../../images/11.png"),
    require("../../images/22.png"),
    require("../../images/11.png")
  ];

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };
  //<img src={require("../../images/biscuit.png")}
  return (
    <div className="carousel">
      <button onClick={handlePrev}>Anterior</button>
      <img src={images[index]} alt="Imagem" />
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
};

export default Carousel;

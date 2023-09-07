import React, { useState } from "react";
import "../css/FlipCard.css";

interface FlipCardProps {
  image: string;
  title: string;
  text: string | JSX.Element;
  bgColor: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ image, title, text, bgColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={image} alt="FlipCard" />
          <h2>{title}</h2>
        </div>
        <div className="flip-card-back" style={{backgroundColor: bgColor}}>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
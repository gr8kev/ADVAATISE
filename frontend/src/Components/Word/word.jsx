import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./WordCarousel.css"; // Import your custom CSS

const WordCarousel = () => {
  const statements = [
    "We enhance brands<br/>and craft seamless digital<br/>experiences",
    "Crafting seamless digital<br/>experiences that<br/>enhance brands",
    "Enhancing brands with<br/>seamless and innovative<br/>digital experiences",
    "Seamless digital<br/>experiences crafted to<br/>enhance your brand",
    "Innovative solutions for<br/>crafting seamless digital<br/>experiences and enhancing<br/>brands",
  ];

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      className="word-carousel"
    >
      {statements.map((statement, index) => (
        <div key={index} className="carousel-slide">
          <h2 dangerouslySetInnerHTML={{ __html: statement }}></h2>
        </div>
      ))}
    </Carousel>
  );
};

export default WordCarousel;

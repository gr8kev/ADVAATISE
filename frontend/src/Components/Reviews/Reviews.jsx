import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Reviews.css";

// Importing images for testimonials
import person1 from "../../assets/review 1.jpg";
import person2 from "../../assets/review 2.jpg";
import person3 from "../../assets/review 3.jpg";
import person4 from "../../assets/review 4.jpg";
import person5 from "../../assets/review 5.jpg";
import { Link } from "react-router-dom";

const testimonials = [
  {
    text: "This service has transformed our business. The quality and attention to detail are unparalleled.",
    name: "Emmanuel Maduka",
    title: "CEO, Rollway Inc.",
    image: person1,
  },
  {
    text: "The team was highly professional and the end product exceeded our expectations.",
    name: "Rachael Johnson",
    title: "Marketing Manager, Bridge Company Ltd",
    image: person2,
  },
  {
    text: "Excellent customer service and outstanding results. Highly recommend!",
    name: "Sam Wilson",
    title: "Product Manager, Kingstons Corp.",
    image: person3,
  },
  {
    text: "A game-changer for our marketing strategy. Brilliant work!",
    name: "John Aigbe",
    title: "CTO, Tech Solutions",
    image: person4,
  },
  {
    text: "The creative solutions provided were exactly what we needed. Fantastic experience!",
    name: "Stella May",
    title: "Creative Director, Design Studio",
    image: person5,
  },
];

const TestimonyCarousel = () => {
  return (
    <>
      <div className="testimony-carousel-container">
        <h2 className="testimony-header">
          What Our Clients Say About Advaatise
        </h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5000}
          transitionTime={600}
          className="testimony-carousel" // Custom class added here
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}`}
                className="testimonial-image"
              />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <h4 className="testimonial-title">{testimonial.title}</h4>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="relax-container">
        <div className="pro">
          <h2>
            let’s <span className="turn"> Advaatise</span> something great{" "}
            together!
          </h2>
          <br />
          <br />
          <br />
          <br />
          <Link to="/Form" className="Pre-button">
            START A PROJECT
          </Link>
        </div>
      </div>
    </>
  );
};

export default TestimonyCarousel;

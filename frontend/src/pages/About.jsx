import React from "react";
import "./About.css";
import Aboutus from "./../assets/about-us.svg";
import Core from "./../assets/core1.svg";
import core2 from "./../assets/core2.svg";
import core3 from "./../assets/core3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="about-control">
        <div className="about-us-container">
          <h3>About Us</h3>
          <p>
            At Advaatise, we offer businesses and agencies content that boosts
            their visibility and increases conversions. For all of your
            marketing needs, our in-house team and a freelance network of
            communicators, producers, and creators collaborate to develop
            high-quality content. We work to make the process more adaptable and
            transparent as the demand for original content and talent keeps
            rising. Without the cooperation and mutual trust of all parties,
            great content cannot be produced.
          </p>
        </div>

        <div className="about-info">
          <div className="about-info-left">
            <img src={Aboutus} />
          </div>
          <div className="about-info-right">
            <div className="about-info-right-perfect">
              <p>
                In order to improve the way that creative talent and brands
                collaborate, we established Advaatise in 2021. They set out to
                redefine the creative process for the contemporary digital
                environment in order to embrace the new millennium’s mantra of
                “continue to engage, interact, connect.” And that’s exactly what
                we did. Our team is currently working to push the boundaries of
                creativity in Africa and around the globe, where we are
                generating new concepts for content in the future.
              </p>
            </div>
          </div>
        </div>

        <div className="about-info-vision">
          <div className="about-info-left">
            <h3>Our Mission</h3>
            <p>
              At Advaatise, we work to promote creative cooperation for
              producing content that inspires, amuses, and increases global
              understanding. In order to achieve this, we link businesses with
              the best creators in their respective fields, streamline the
              creation of content with clear workflows, and promote teamwork on
              the Advaatise platform.
            </p>
          </div>
          <div className="about-info-right">
            <h3>Our Promise</h3>
            <p>
              We recognize that building meaningful relationships with your
              consumers demands producing informative, interesting, and engaging
              content. We know what it takes to create an efficient, scalable,
              and affordable content plan because our team has generated more
              content. We are here for all your needs.
            </p>
          </div>
        </div>

        <div className="about-us-core-value">
          <h2>Our Core Values</h2>
          <div className="about-us-core">
            <div className="core-item">
              <img src={Core} alt="Image 1" />
              <h2>Quality</h2>
              <p>
                We are committed to providing high-quality video content that
                exceeds our customers’ expectations. We use the latest
                technology, best practices, and a team of experts to deliver
                top-notch results that drive business success.
              </p>
            </div>
            <div className="core-item">
              <img src={core2} alt="Image 2" />
              <h2>Creativity</h2>
              <p>
                We believe in the power of creativity and strive to bring new
                and innovative ideas to our video content. We aim to push the
                boundaries and challenge the status quo to create truly unique
                and impactful videos for our clients.
              </p>
            </div>
            <div className="core-item">
              <img src={core3} alt="Image 3" />
              <h2>Services</h2>
              <p>
                We are dedicated to providing exceptional customer service. We
                strive to understand our clients’ needs and goals, and we work
                closely with them to create content that aligns with their
                vision. We are committed to building long-lasting relationships
                with our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relax-container">
        <div className="pro">
          <h2>
            let’s <span className="turn">Advaatise</span> something great
            together!
          </h2>
          <Link to="/Form" className="Pre-button">
            START A PROJECT
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;

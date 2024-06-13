import React from "react";
import "./Services.css";
import services1 from "../../assets/services 1.png";
import services2 from "../../assets/services 2.png";
import service3 from "../../assets/service3.jpg";
import services4 from "../../assets/services 4.jpg";
import services5 from "../../assets/services 5.png";
import services6 from "../../assets/services 6.png";
import colors from "../../assets/colors.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="wrapper">
        <h2>SERVICES</h2>
        <div className="services-container cursor-scale small">
          <div className="service">
            <div className="service-image">
              <img src={services1} alt="Service 1 Image" />
            </div>
            <div className="service-text">
              <h3>Ads</h3>
              <p>
                Unlocking Creative Excellence: We are a forward-thinking
                advertising agency dedicated to
              </p>
              <Link to="/Services" className="Pro-Button">
                More
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={services2} alt="Service 2 Image" />
            </div>
            <div className="service-text">
              <h3>Motion Graphics</h3>
              <p>
                Motion graphics are more than just eye-catching designs –
                they're powerful tools for communication.
              </p>
              <Link to="/Services" className="Pro-Button">
                More
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={service3} alt="Service 3 Image" />
            </div>
            <div className="service-text">
              <h3>Corporate/Brand Videos</h3>
              <p>
                Here, we bring creativity, strategy, and innovation to life.
                Dive into our world of captivating ads,
              </p>
              <Link to="/Services" className="Pro-Button">
                More
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={services4} alt="Service 4 Image" />
            </div>
            <div className="service-text">
              <h3>Real Estate Videos</h3>
              <p>
                "Showcase your properties with captivating, high-quality real
                estate videos."
              </p>
              <Link to="/Services" className="Pro-Button">
                More
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={services5} alt="Service 5 Image" />
            </div>
            <div className="service-text">
              <h3>Product/Social Media Contents</h3>
              <p>
                Bring your products to life with captivating descriptions that
                sell.
              </p>
              <Link to="/Services" className="Pro-Button">
                More
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={services6} alt="Service 6 Image" />
            </div>
            <div className="service-text">
              <h3>Communication Strategies</h3>
              <p>
                Providing strategic consulting services to advise clients on
                marketing strategies,
              </p>
              <Link to="/Services" className="Pro-Button">
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="image">
          <h2>
            Create
            <br />
            Captivate
            <br />
            Convert
          </h2>
          <br />
          <p>
            "with ADVAATISE. From Concept to Creation:
            <br /> <span className="tack">Your Brand, Perfected.</span>"
          </p>
        </div>
        <div className="image">
          <img src={colors} alt="Image 2" />
        </div>
      </div>
    </>
  );
};

export default Services;

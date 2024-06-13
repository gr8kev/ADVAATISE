import React from "react"; // Removed the comma here
import "./Services.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

// Import your images
import serviceImage1 from "../../assets/services 1.png";
import serviceImage2 from "../../assets/services 2.png";
import serviceImage3 from "../../assets/service3.jpg";
import serviceImage4 from "../../assets/services 4.jpg";
import serviceImage5 from "../../assets/services 5.png";
import serviceImage6 from "../../assets/services 6.png";
import image1 from "../../assets/corporate.png";
import image2 from "../../assets/Corporate videos.png";
import image3 from "../../assets/services 6.png";
import image4 from "../../assets/Kuda bank.png";
import image5 from "../../assets/American express.jpg";

const Services = () => {
  return (
    <>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
      >
        <div>
          <img src={image1} alt="Image 1" />
        </div>
        <div>
          <img src={image2} alt="Image 2" />
        </div>
        <div>
          <img src={image3} alt="Image 3" />
        </div>
        <div>
          <img src={image4} alt="Image 4" />
        </div>
        <div>
          <img src={image5} alt="Image 5" />
        </div>
      </Carousel>
      <div className="wrapper">
        <h2 className="cursor-scale">SERVICES</h2>
        <div className="services-container cursor-scale small">
          <div className="service">
            <div className="service-image">
              <img src={serviceImage1} alt="Service 1 Image" />
            </div>
            <div className="service-text">
              <h3>Ads</h3>
              <p>
                Unlocking Creative Excellence: We are a forward-thinking
                advertising agency dedicated to crafting compelling narratives
                and delivering impactful campaigns.
              </p>
              <Link to="/Form" className="Pro-button">
                Book A Project
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={serviceImage2} alt="Service 2 Image" />
            </div>
            <div className="service-text">
              <h3>Motion Graphics</h3>
              <p>
                Motion graphics are more than just eye-catching designs –
                they're powerful tools for communication. Whether it's
                explaining your brand story.
              </p>
              <Link to="/Form" className="Pro-button">
                Book A Project
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={serviceImage3} alt="Service 3 Image" />
            </div>
            <div className="service-text">
              <h3>Corporate/Brand videos</h3>
              <p>
                Here, we bring creativity, strategy, and innovation to life.
                Dive into our world of captivating ads,
              </p>
              <Link to="/Form" className="Pro-button">
                Book A Project
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={serviceImage4} alt="Service 4 Image" />
            </div>
            <div className="service-text">
              <h3>Real Estate Videos</h3>
              <p>
                "Showcase your properties with captivating, high-quality real
                estate videos."
              </p>
              <Link to="/Form" className="Pro-button">
                Book A Project
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={serviceImage5} alt="Service 5 Image" />
            </div>
            <div className="service-text">
              <h3>Product/Social Media Contents</h3>
              <p>
                Bring your products to life with captivating descriptions that
                sell. Our expert team crafts compelling narratives.
              </p>
              <Link to="/Form" className="Pro-button">
                Book A Project
              </Link>
            </div>
          </div>
          <div className="service">
            <div className="service-image">
              <img src={serviceImage6} alt="Service 6 Image" />
            </div>
            <div className="service-text">
              <h3>Communication Strategies</h3>
              <p>
                Providing strategic consulting services to advise clients on
                marketing strategies.
              </p>
              <Link to="/Form" className="Pro-button">
                Book A Project
              </Link>
            </div>
          </div>
        </div>
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
export default Services;

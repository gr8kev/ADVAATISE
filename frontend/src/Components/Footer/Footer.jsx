import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import BLUE from "./../../assets/BLUE.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer">
        <div className="footer-logo">
          <Link to="/">
            <img src={BLUE} alt="Logo" />
          </Link>
        </div>
        <div className="footer-section about-us">
          <h3>About Us</h3>
          <p>
            {" "}
            We offer businesses and agencies content that boosts their
            visibility and increases conversions.
          </p>
        </div>

        <div className="footer-section navigation-links">
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Contacts">Contact</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Portfolios">Portfolio</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section navigation-links">
          <h3>Navigation</h3>
          <ul>
            <li>
              <Link to="/Portfolios">Jobs Done</Link>
            </li>
            <li>
              <Link to="/Services">Book a Project</Link>
            </li>
            <li>
              <Link to="/Contacts">Get in Touch</Link>
            </li>
            <li>
              <Link to="/Signin">Sign up</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <h3>Contact Information</h3>
          <p>6A, Babajide George, Lekki Phase 1, Lagos Nigeria</p>
          <p>Email: info@advaatise.com</p>
          <p>Phone: 07013708832</p>
        </div>
      </footer>
      <div className="media">
        <div>
          {" "}
          <p>&copy; 2024 ADVAATISE. All rights reserved.</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/advaatise?igsh=MTFrZ2JlbnA0NTc2Zw%3D%3D&utm_source=qr">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/advaatise/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/your_twitter_handle">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.youtube.com/@advaatise">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;

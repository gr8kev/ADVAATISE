import React from "react";
import "./Contacts.css";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "../Map/Map";
// Ensure the path is correct

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-content">
          <p>
            Get exclusive access to premium content and experience
            <br /> the power of video in driving business success with our
            content creation solutions
          </p>
        </div>
        <div className="contact-container">
          <div className="containerinfo">
            <div className="square">
              <div className="icon">
                <b></b>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  6 olajide George <br />
                  Lagos Island
                  <br />
                  Lagos
                </p>
              </div>
            </div>
            <div className="square">
              <div className="icon">
                <b></b>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>07013708832</p>
              </div>
            </div>
            <div className="square">
              <div className="icon">
                <b></b>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>info@advaatise.com</p>
              </div>
            </div>
            <h2 className="connect">Connect with Us</h2>
            <ul className="sci">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQHmXrUbp4vnhwAAAZAE1O6w7FFuvshe1cpjWAYKbdR4j3yvbrj_rQ70qddO8ZnwVR-tV5uUKok_H0yHshLlQ_PmIBW87TQioMsAcd5LUnggRRhJ1sngblstaQtCDO55mRDPbpg=&original_referer=&sessionRedirect=https%3A%2F%2Fng.linkedin.com%2Fcompany%2Fadvaatise">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/advaatise/">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@advaatise">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
              </li>
            </ul>
          </div>
          <div className="containerform">
            <form>
              <h2>Send Message</h2>
              <div className="type">
                <input type="text" name="" required="required" />
                <span>Full Name</span>
              </div>
              <div className="type">
                <input type="text" name="" required="required" />
                <span>Email</span>
              </div>
              <div className="type">
                <textarea required="required"></textarea>
                <span>Type your Message</span>
              </div>
              <div className="type">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Map />
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

export default Contact;

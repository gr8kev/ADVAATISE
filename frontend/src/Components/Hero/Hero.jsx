import React, { useEffect, useRef } from "react";
import "./Hero.css";
import Loop from "./../../assets/Loop Website.mp4";
import Word from "./../Word/word";
import { Link } from "react-router-dom";

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);
  return (
    <>
      <div className="hero">
        <div className="video-section">
          <div className="video-container">
            <div id="player">
              <video
                ref={videoRef}
                src={Loop}
                type="video/mp4"
                loop
                muted
                playsInline
                className="video-element"
              />
            </div>
          </div>
          <div className="video-content">
            <h1>
              Unlock
              <br />
              The Power Of Video <br />
              For Your Business
            </h1>
            <div className="Button">
              <Link to="/Form">START A PROJECT</Link>
            </div>
          </div>
        </div>
      </div>
      <Word />
    </>
  );
};

export default Hero;

import React, { useRef, useEffect, useState } from "react";
import "./Brands.css";
import levitateLogo from "./../../assets/levitate logo.svg";
import KudaLogo from "./../../assets/kuda_bank.svg";
import OppoLogo from "./../../assets/Oppo-Logo.wine.svg";
import American from "./../../assets/American.png";
import essenza from "./../../assets/essenza.avif";
import Reckit from "./../../assets/reckitt.svg";
import Durex from "./../../assets/durex.png";
import NGDX from "./../../assets/ngdx.svg";
import SHELT from "./../../assets/shelt.png";
import Access from "./../../assets/access.png";
import Samsung from "./../../assets/samsung.png";
import smith from "./../../assets/logo.png";
import puma from "./../../assets/puma.png";

const Brands = () => {
  const brandImages = [
    levitateLogo,
    KudaLogo,
    OppoLogo,
    essenza,
    Reckit,
    Durex,
    NGDX,
    SHELT,
    Access,
    Samsung,
    puma,
    American,
  ];

  const containerRef = useRef(null);
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFloating(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.25, // Adjust the threshold as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="brands">
      <h1>Brands</h1>
      <div
        ref={containerRef}
        className={`brand-container ${isFloating ? "floating" : ""}`}
      >
        {brandImages.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Brand ${index + 1}`}
            className="brand-logo"
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;

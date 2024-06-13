import React from "react";
import "./BackToTop.css";

const BackToTopButton = () => {
  const scrollToTop = () => {
    console.log("Scrolling to top...");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="back-to-top-button"
      style={{ position: "fixed", bottom: "20px", right: "20px" }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;

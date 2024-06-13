import React, { useEffect, useRef } from "react";
import "./Works.css";
import Client from "../../assets/client.png";
import Content from "../../assets/content-creator.png";
import Eco from "../../assets/eco-factory.png";
import Referal from "../../assets/engagement.png";

const WorkBox = () => {
  const numberElements = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(countWhenInView, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    numberElements.current.forEach((numberElement) => {
      observer.observe(numberElement.closest(".box"));
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  function countWhenInView(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target.querySelector(".number");
        const finalCount = parseInt(target.getAttribute("data-count"));
        countUp(target, finalCount);
        observer.unobserve(entry.target);
      }
    });
  }

  function countUp(target, finalCount) {
    let start = 0;
    const increment = Math.ceil(finalCount / 50);
    const timer = setInterval(() => {
      start += increment;
      if (start >= finalCount) {
        clearInterval(timer);
        start = finalCount;
      }
      target.textContent = start;
    }, 50);
  }

  return (
    <div className="work-box ">
      <h3>Our Work Speaks</h3>
      <div className="work-container">
        <div className="box">
          <img src={Client} alt="Favicon 1" className="word-icon" />
          <span
            className="number"
            data-count="250"
            ref={(el) => numberElements.current.push(el)}
          >
            0
          </span>
          <p className="answer">CLIENTS SERVED</p>
        </div>
        <div className="box">
          <img src={Content} alt="Favicon 2" className="word-icon" />
          <span
            className="number"
            data-count="250"
            ref={(el) => numberElements.current.push(el)}
          >
            0
          </span>
          <p className="answer">CONTENTS PRODUCED</p>
        </div>
        <div className="box">
          <img src={Eco} alt="Favicon 3" className="word-icon" />
          <span
            className="number"
            data-count="12"
            ref={(el) => numberElements.current.push(el)}
          >
            0
          </span>
          <p className="answer">INDUSTRIES</p>
        </div>
        <div className="box">
          <img src={Referal} alt="Favicon 4" className="word-icon" />
          <span
            className="number"
            data-count="52"
            ref={(el) => numberElements.current.push(el)}
          >
            0
          </span>
          <p className="answer">REFERAL PERCENTAGE</p>
        </div>
      </div>
    </div>
  );
};

export default WorkBox;

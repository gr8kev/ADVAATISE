import React, { useEffect, useRef } from "react";
import "./Portfolios.css";
import Client from "../../assets/client.png";
import Content from "../../assets/content-creator.png";
import Eco from "../../assets/eco-factory.png";
import Referal from "../../assets/engagement.png";
import { Link } from "react-router-dom";

const OurWorks = () => {
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
    <>
      <div className="body"></div>
      <div className="relax">
        <div className="pro">
          <h2>
            Explore Our Excellent <br />
            <span className="turn"> Jobs!</span>
          </h2>
        </div>
      </div>
      <section id="our-work">
        <div className="video-grid">
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/g57dH1wXXdw?si=Z5En0vr8qHhwlcb3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1; clipboard-write; loop=1, gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sVRtQsZfb9M?si=W1GLCiPE4R-6emp2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1, clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share, loop=1,"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PQQ3twKms7A?si=2yNrZz3PJEpaAUal"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1; loop=1, clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/35NisFp5QSk?si=lwdH4sYCP7kRsyYh"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_CsDtVDaHhg?si=O3He85xchf1I7pwn"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4hfoVMybcGA?si=FdMOPaNz5NWcvwBQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/T3XYjydx6nY?si=8ANcC_wdGaZFdpnc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bTCwXytz0Eg?si=hYXo_lmV2Qgd7-K6"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/g57dH1wXXdw?si=Z5En0vr8qHhwlcb3"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1; clipboard-write; loop=1, gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/a4sBvSo4j8o?si=t07cX_DA49zEcppp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1; clipboard-write; loop=1, gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/48jIJZLI5_g?si=WcDBgFPOjIwJnQc9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1; clipboard-write; loop=1, gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video-thumbnail">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LCXwbjJNxwc?si=-_k92zrL2961HShR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay=1; clipboard-write; loop=1, gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <div className="work-box ">
        <h3>Our Work Speaks</h3>
        <div className="work-container">
          <div className="box">
            <img src={Client} alt="Favicon 1" className="word-icon" />
            <span
              className="number"
              data-count="300"
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
              data-count="500"
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
              data-count="100"
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
              data-count="85"
              ref={(el) => numberElements.current.push(el)}
            >
              0
            </span>
            <p className="answer">REFERAL PERCENTAGE</p>
          </div>
        </div>
      </div>

      <div className="relax-container">
        <div className="pro">
          <h2>
            let’s <span className="turn"> Advaatise </span>your next project{" "}
            <br />
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

export default OurWorks;

import React, { useEffect, useRef, useState } from "react";
import "./Parts.css";

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselActive, setCarouselActive] = useState(true);

  const videos = [
    { id: "sVRtQsZfb9M", title: "Video 1" },
    { id: "4hfoVMybcGA", title: "Video 2" },
    { id: "T3XYjydx6nY", title: "Video 3" },
    { id: "bTCwXytz0Eg", title: "Video 4" },
  ];

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      videoRefs.current.forEach((videoRef, index) => {
        if (videoRef) {
          new window.YT.Player(videoRef, {
            videoId: videoRef.getAttribute("data-video-id"),
            events: {
              onStateChange: onPlayerStateChange,
            },
            playerVars: {
              rel: 0,
              autoplay: 0,
              modestbranding: 1,
              controls: 1,
              showinfo: 0,
              fs: 1,
            },
          });
        }
      });
    };

    return () => {
      window.onYouTubeIframeAPIReady = null;
    };
  }, []);

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      setCarouselActive(false);
    } else if (event.data === window.YT.PlayerState.ENDED) {
      setCarouselActive(true);
      setTimeout(nextVideo, 2000); // Move to the next video after 2 seconds
    } else if (event.data === window.YT.PlayerState.PAUSED) {
      setCarouselActive(true);
    }
  };

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  return (
    <div className="sharp">
      {videos.map((video, index) => (
        <div
          key={index}
          style={{
            display: index === currentIndex ? "block" : "none",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            id={`player-${index}`}
            ref={(el) => (videoRefs.current[index] = el)}
            data-video-id={video.id}
            className="youtube-container"
          ></div>
        </div>
      ))}
      <button
        onClick={prevVideo}
        style={{ position: "absolute", left: "0", top: "50%" }}
        className="carousel-button"
      >
        Prev
      </button>
      <button
        onClick={nextVideo}
        style={{ position: "absolute", right: "0", top: "50%" }}
        className="carousel-button"
      >
        Next
      </button>
    </div>
  );
};

export default VideoCarousel;

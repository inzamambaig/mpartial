import React from "react";
import homepage from "../assets/videos/homepage.mp4";
const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <header id="product-video">
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source src={homepage} type="video/mp4" />
          </video>
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <h1 className="display-3">
                  Impartial, Remote, 3rd-Party, <br></br>
                  Estimating Engine
                </h1>
                <div className="middle">
                  <div className="mouse"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Hero;

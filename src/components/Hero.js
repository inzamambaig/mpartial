import React from "react";
import homepage from "../assets/videos/homepage.mp4";
import loading from "../assets/images/loading.png";
const Hero = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <header id="product-video">
          <video
            playsInline="playsinline"
            autoPlay="autoplay"
            preload="auto"
            muted="muted"
            loop="loop"
            poster={loading}
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
                  <div className="mouse">
                    <a href="#down">&nbsp;</a>
                  </div>
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

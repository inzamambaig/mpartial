import React, { useEffect } from "react";
import pre from "../assets/images/pre.jfif";
import post from "../assets/images/post.jfif";

let active = false;

const scrolling = () => {
  active = true;
  document.querySelector(".scroller").classList.add("scrolling");
};

const Image = () => {
  useEffect(() => {
    document.body.addEventListener("mouseup", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("mouseleave", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("mousemove", function (e) {
      if (!active) return;
      let x = e.pageX;
      x -= document.querySelector(".wrapper").getBoundingClientRect().left;
      scrollIt(x);
    });

    function scrollIt(x) {
      let transform = Math.max(
        0,
        Math.min(x, document.querySelector(".wrapper").offsetWidth)
      );
      console.log(transform);
      document.querySelector(".after").style.width = transform + "px";
      document.querySelector(".scroller").style.left = transform - 20 + "px";
    }
    scrollIt(100);

    document
      .querySelector(".scroller")
      .addEventListener("touchstart", function () {
        active = true;
        document.querySelector(".scroller").classList.add("scrolling");
      });
    document.body.addEventListener("touchend", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });
    document.body.addEventListener("touchcancel", function () {
      active = false;
      document.querySelector(".scroller").classList.remove("scrolling");
    });
  }, []);

  return (
    <>
      <div className="container image-content">
        <div className="row justify-content-md-center">
          <div className="col">
            <div className="wrapper">
              <div className="before">
                <img className="content-image" src={pre} draggable="false" />{" "}
              </div>
              <div className="after">
                <img className="content-image" src={post} draggable="false" />
              </div>
              <div className="scroller" onMouseDown={scrolling}>
                <svg
                  className="scroller__thumb"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                >
                  <polygon
                    points="0 50 37 68 37 32 0 50"
                    style={{ fill: "#fff" }}
                  />
                  <polygon
                    points="100 50 64 32 64 68 100 50"
                    style={{ fill: "#fff" }}
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 call-to-action">
            <a href="">
              <button className="btn btn-primary ctn">Try Today</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;

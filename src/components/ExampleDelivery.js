import React from "react";
import planone from "../assets/images/planone.jfif";
import plantwo from "../assets/images/plantwo.jfif";
import planthree from "../assets/images/planthree.jfif";
import planfour from "../assets/images/planfour.jfif";
import planfive from "../assets/images/planfive.jfif";
import plansix from "../assets/images/plansix.jfif";
import buildingone from "../assets/images/buildingone.png";
import buildingtwo from "../assets/images/buildingtwo.png";

const ExampleDelivery = () => {
  return (
    <div className="container-fluid example-delivery">
      <div className="row justify-content-center">
        <div className="col-md-12 work-heading">
          <h2 className="working-heading" id="example-one">
            Example Deliverables
          </h2>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col ">
          <h3 className="example-heading" id="example-two">
            Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TruePlan)
          </h3>
        </div>
      </div>
      <div className="container ">
        <div className="row iframe-content">
          <div className="col-md-6">
            <iframe
              width="100%"
              height="480"
              src="https://my.matterport.com/show/?m=e5Wxtu8Arbx"
              frameBorder="0"
              loading="lazy"
              allowFullScreen=""
              title="3d-showcase"
            ></iframe>
          </div>
          <div className="col-md-6">
            <iframe
              width="100%"
              height="480"
              src="https://my.matterport.com/show/?m=DhqzGgT7M1E"
              frameBorder="0"
              loading="lazy"
              allowFullScreen=""
              title="3d-showcase"
            ></iframe>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col ">
            <h3 className="example-heading">Immaculate. Impartial. [ESX]</h3>
          </div>
        </div>
      </div>
      <div className="row justify-content-center carousel-images">
        <div className="col-md-6" id="carousel-col">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="5"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src={planone}
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={plantwo}
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={planthree}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={planfour}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={planfive}
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src={plansix}
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <button className="carousel-btn" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </button>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <button className="carousel-btn" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center plan">
        <div className="col ">
          <h3 className="example-heading">
            <a href="!#" className="crousel-heading">
              TruePlan [SKX]
            </a>
          </h3>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-5" id="img-col">
          <img className="img-fluid building-image" src={buildingone} alt="" />
        </div>
        <div className="col-md-5">
          <img className="img-fluid building-image" src={buildingtwo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ExampleDelivery;

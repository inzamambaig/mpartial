import React from "react";

const Working = () => {
  return (
    //   Title
    <div className="container-fluid working">
      <div className="row justify-content-center">
        <div className="col-6 work-heading">
          <h2 className="working-heading">How It Works</h2>
        </div>
      </div>
      {/* Numbers */}
      <div className="container numbers">
        <div className="row">
          <div className="col-4">
            <div className="row">
              <div className="col-md-4 work-col">
                <h2 className="work-numbers">1</h2>
              </div>
              <div className="col work-text">
                <a href="">
                  Perform pre-mitigation and post-mitigation scans with a
                  Matterport Pro Series camera.
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-md-4 work-col">
                <h2 className="work-numbers">2</h2>
              </div>
              <div className="col work-text">
                <a href="">
                  Submit the Matterport scans via the mpartial portal and then
                  go back to what you do great.
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-md-4 work-col">
                <h2 className="work-numbers">3</h2>
              </div>
              <div className="col work-text">
                <a href="">
                  Receive a well-formatted, fully documented Xactimate PDF, ESX
                  & Matterport TruePlan SKX.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-4 call-to-action">
          <a href="">
            <button className="btn btn-primary ctn">Get Started</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Working;

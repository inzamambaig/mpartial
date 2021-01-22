import React from "react";

const Info = () => {
  return (
    <div className="container-md">
      <div className="row info-section">
        <div className="col-md">
          <h1 className="info-heading" id="info-one">
            GROUND-TRUTH<br></br> DATA EVERYONE<br></br> TRUSTS
          </h1>
        </div>
        <div className="col-md">
          <span type="hidden" id="down"></span>
          <p className="info-content" id="info-two">
            We have combined the best-of-breed technology platforms with an eye
            towards relieving you of administrative burden. Matterport 3D scans
            augmented by TruePlan are used to generate consistent Xactimate
            sheets that are delivered in accord with Actionable Insights
            compliance rule sets. Each mpartial is produced with full
            transparency, unprecedented forensic photography, and infallible
            geospatial data that collectively result in rapid approvals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;

import React from "react";
import "./Ourstory.css";
import { Helmet } from "react-helmet";

const Ourstory = () => {
  return (
    <>
      <div>
        <div className="mainourstory">
          <Helmet>
            <title>Our Story - The Finest Yield</title>
            <meta name="description" content="Our story component" />
          </Helmet>
          <div className="background"></div>
          <div className="contentourstory1">
            <img src="./images/ourstory/Who.png" alt="" />
            <h1>Who we are</h1>
            <p>
              {" "}
              Supreme Chemical, the foremost industry leader, excels in
              producing and supplying top-tier plant nutrients. Our fertilizers
              are tailored to address a wide range of crop needs and application
              methods. At Supreme Chemical, we hold our clients in the highest
              regard, viewing them as invaluable partners. Our dedicated team
              works tirelessly to unlock the maximum production potential for
              each and every one of our valued customers.
            </p>
          </div>
          <div className="ourmission">
            <img src="./images/ourstory/mission.png" alt="" />
            {/* <h1>Our Mission</h1> */}
            <p>
              Our mission is to elevate every clients experience to unique &
              beneficial partnership that help achieving your goals.
            </p>
          </div>
          <div className="vision">
            <img src="./images/ourstory/vision.png" alt="" />
            {/* <h1>Our Mission</h1> */}
            <p>
            Our ultimate vision & goal is to rise to a position of global leadership in the production of supreme 
quality fertilizers.
            </p>
          </div>
          <div className="background2"></div>
          <div className="ourcorevalues">
            <h1>Our Core Values</h1>
            <div className="signs">
              <div className="names">
                <h2 className="integrity">Integrity</h2>
                <h2 className="accountability">Accountability</h2>
                <h2 className="quality">Quality</h2>
                <h2 className="team">Teamwork</h2>
              </div>
              <img src="./images/ourstory/integrity.png" alt="" />
              <img src="./images/ourstory/accountability.png" alt="" />
              <img src="./images/ourstory/quality.png" alt="" />
              <img src="./images/ourstory/teamwork.png" alt="" />
            </div>
            <img
              src="./images/home/partner.jpg"
              alt=""
              className="partnerlogo"
            />
          </div>
          <h1 className="partner">Our Partner</h1>
        </div>
      </div>
    </>
  );
};

export default Ourstory;

import React from "react";
import "./Home.css";
import {Helmet} from "react-helmet";

function Home() {
  return (
    <>
      <div className="responsivehome">
      <Helmet>
            <title>Home - The Finest Yield</title>
            <meta name="description" content="Home component" />
        </Helmet>
        <div className="mainhome">
          <div className="content">
            <h1>The Finest Yield</h1>
            <p>
              We prioritize quality and productivity on our clients' {" "}
              farms through crop selection optimization and advanced soil
              management. Our commitment to agricultural innovation keeps
              us at the forefront of industry advancements, ensuring we
              apply cutting-edge technologies for increased farm productivity.{" "}
              With our client-centric approach and precision farming
              solutions, we aim to maximize crop yields sustainably.
            </p>
          </div>
          <div className="img1">
            <img src="./images/home/home.jpg.jpg" alt=""/>
          </div>
        </div>
        <div className="mainhome2">
          <div className="content2">
            <h1>Products & Services</h1>
          </div>
          <div className="fertilizers">
            <div className="fimg">
              <img src="./images/home/fertilizers.jpg" alt="" />
            </div>
            <div className="fertilizercontent">
              <h2>Fertilizers</h2>
              <p>
                Elevate your gardening with our eco-
                friendly fertilizers. Our premium selection provides essential
                nutrients for vibrant, healthy plants. Trust us for lush
                gardens.
              </p>
            </div>
          </div>
          <div className="about">
            <div className="aboutcontent">
              <h2>Who we are</h2>
              <p>
                Supreme Chemical, the foremost industry leader, excels in
                producing and supplying top-tier plant nutrients. Our
                fertilizers are tailored to address a wide range of crop needs
                and application methods. At Supreme Chemical, we hold our
                clients in the highest regard, viewing them as invaluable
                partners. Our dedicated team works tirelessly to unlock the
                maximum production potential for each and every one of our
                valued customers.
              </p>
            </div>
          </div>
          <div className="farmconsultation">
            <img
              src="./images/home/farm consultation.jpg"
              alt=""
              className="fcimg"
            />
          </div>
          <div className="farmconsultationcontent">
            <h2>Farm Consultation</h2>
            <p>
              Explore our extensive range of cutting-edge agricultural
              innovations designed to elevate your farm's productivity and
              propel it into the future
            </p>
          </div>
        </div>
        <div className="map">
          <img src="./images/home/locations.png" alt="" />
        </div>
      </div>
    </>
  );
}

<></>;
export default Home;

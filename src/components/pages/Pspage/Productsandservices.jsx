import React from "react";
import { NavLink } from "react-router-dom";
import "./Productsandservices.css";
import { Helmet } from "react-helmet";

const Productsandservices = () => {
  return (
    <>
      <div className="mainps">
        <Helmet>
          <title>Products&Services - The Finest Yield</title>
          <meta name="description" content="Products&services component" />
        </Helmet>
        <div className="heading">
          <h1>PRODUCTS</h1>
          <div className="bgp"></div>
          <NavLink to="/granularurea">
            <div className="gu">
              <img src="./images/products/granularurea50.png" alt="" />
            </div>
          </NavLink>
        </div>
        <NavLink to="/prilledurea">
          <div className="pu">
            <img src="./images/products/prilled50.png" alt="" />
          </div>
        </NavLink>
        <NavLink to="/calciumammoniumnitrate">
          <div className="cancircle">
            <img src="./images/products/can50.png" alt="" />
          </div>
        </NavLink>
        <div className="services">
          <h1 className="heading2">Services</h1>
          <div className="cropselection">
            <img src="./images/services/cropselection.jpg" alt="" />
            <h1>Crop Selection</h1>
            <p>
              Selecting the best crop for local conditions, market demand, and
              sustainability is crucial for maximizing yield and ensuring
              long-term success.
            </p>
          </div>
          <div className="soilmanagement">
            <img src="./images/services/soilmanagement.jpg" alt="" />
            <h1>Soil Management</h1>
            <p>
              Optimize soil for higher yields, less erosion, and cost savings.
              Boost fertility, structure, and nutrient efficiency with our soil
              management.
            </p>
          </div>
          <div className="croprotation">
            <img src="./images/services/croprotation.jpg" alt="" />
            <h1>Crop Rotation</h1>
            <p>
              Crop rotation, involving planting diverse crops across seasons,
              has been pivotal in shaping modern farming.
            </p>
          </div>
          <div className="watermanagement">
            <img
              src="./images/services/watermanagement.jpg"
              alt=""
              className="wm"
            />
            <h1>Water Management</h1>
            <p>
              Efficient water managing in agriculture is crucial, reducing crop
              stress during flowering and fruiting, and mitigating drought
              impact.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productsandservices;

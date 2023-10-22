import React from "react";
import "./Granularurea.css";

const Granularurea = () => {
  return (
    <>
      <div className="maingranularurea">
        <div className="granularurea">
          <img src="./images/products/urea.png" alt="" className="sidefertilizer" />
          <img src="./images/products/granularurea50.png" alt="" className="gubag" />
          <img src="./images/products/granularurea25.png" alt="" className="gubag2" />
          <img src="./images/products/granularurea10.png" alt="" className="gubag3" />
          <h1>Granular Urea</h1>
          <p>
            {" "}
            Granular urea is a highly regarded solid nitrogen fertilizer, prized
            for its small, uniform white crystals. What sets it apart is its
            remarkable nitrogen concentration, making it a cornerstone for
            promoting robust plant growth. Beyond its visual appeal, the uniform
            granules offer practical advantages in agriculture. The consistency
            in granule size ensures precise and efficient distribution, reducing
            the risk of nitrogen loss through processes like volatilization or
            leaching.
          </p>
          <img src="./images/products/production.png" alt="" className="guicon1"/>
          <h2 className="gup1">Suitable for production in blends</h2>
          <img src="./images/products/spread.png" alt="" className="guicon2" />
          <h2 className="gup2">Improved for better spreading</h2>
          <div className="gudiv"></div>
          <div className="gudiv2"></div>
          <table>
          <tr>
              <td>Total Nitrogen (N), min</td>
              <td>≥ 46.2%</td>
            </tr>
            <tr>
              <td>Biuret, max</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>Moisture, max</td>
              <td>0.5%</td>
            </tr>
            <tr>
              <td>Formaldehyde (HCHO) </td>
              <td>≥ 0.45%</td>
            </tr>
            <tr>
              <td>Friability</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>Free Ammonia</td>
              <td>60-100 ppm</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Granularurea;

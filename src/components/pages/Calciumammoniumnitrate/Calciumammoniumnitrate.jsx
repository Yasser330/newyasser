import React from "react";
import "./Calciumammoniumnitrate.css";

const Calciumammoniumnitrate = () => {
  return (
    <>
      <div className="maincan">
        <div className="can">
          <img src="./images/products/urea.png" alt="" className="sidefertilizer3" />
          <img src="./images/products/can50.png" alt="" className="canbag" />
          <img src="./images/products/can25.png" alt="" className="canbag2" />
          <img src="./images/products/can10.png" alt="" className="canbag3" />
          <h1>Calcium Ammonium Nitrate</h1>
          <p>
            {" "}
            This innovative fertilizer leverages fast-release nitrogen and
            calcium to boost soil strength while maintaining optimal pH levels.
            The balanced blend of ammoniacal and nitric nitrogen fosters
            sustainable plant nutrition, leading to enhanced root strength and
            heightened pest resistance. Its versatility extends to a wide array
            of crops and soil types, making it a valuable choice for
            agricultural applications.
          </p>
          <img src="./images/products/production.png" alt="" className="canicon1"/>
          <h2 className="canp1">Suitable for production in blends</h2>
          <img src="./images/products/spread.png" alt="" className="canicon2" />
          <h2 className="canp2">Improved for better spreading</h2>
          <div className="candiv"></div>
          <div className="candiv2"></div>
          <table>
            <tr>
                <td>Appearance</td>
                <td>Greyish-white granules</td>
            </tr>
          <tr>
              <td> <br />
                Total Nitrogen (N), max <br /><br />
                    Nitric N(N-N03), max. <br /><br />
                    Ammoniacal N, max <br /><br />
              </td>
              <td><br />
                27% <br /><br />
              13.5% <br /><br />
              13.5% <br /><br />
              </td>
            </tr>
            <tr>
              <td>Moisture, max</td>
              <td>≥ 0.45%</td>
            </tr>
            <tr>
                <td><br />
                Granulometric Composition: <br /><br />
                under 1 mm, max. <br /><br />
                3.15-4 mm, min. <br /><br />
                2-5 mm, min. <br /><br />
                under 6.3 mm <br /><br />
                </td>
                <td><br /><br /><br />
                1% <br /><br />
                25% <br /><br />
                95% <br /><br />
                100% <br /><br />
                </td>
            </tr>
            <tr>
              <td>Granule static strength, min</td>
              <td>3 MPa</td>
            </tr>
            <tr>
              <td>Free Flowing</td>
              <td>100%</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Calciumammoniumnitrate;

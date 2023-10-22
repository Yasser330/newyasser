import React from 'react'
import "./Prilledurea.css"
const Prilledurea = () => {
  return (
    <>
  <div className="mainprilledurea">
    <div className="prilledurea">
      <img src="./images/products/urea.png" alt="" className="sidefertilizer2" />
      <img src="./images/products/prilled50.png" alt="" className="pubag" />
      <img src="./images/products/prilled25.png" alt="" className="pubag2" />
      <img src="./images/products/prilled10.png" alt="" className="pubag3" />
      <h1>Prilled Urea</h1>
      <p>
        {" "}
        Prilled urea, a high-nitrogen fertilizer with over 46% nitrogen content,
        is renowned for its uniform spherical prills. Its exceptional 100% water
        solubility makes it an optimal choice for irrigation and foliar
        fertilization. This versatile fertilizer also plays a crucial role in
        NPK fertilizer production, contributing significantly to agricultural
        and horticultural practices, resulting in improved crop yields and
        enhanced plant health.
      </p>
      <img src="./images/products/production.png" alt="" className="puicon1" />
      <h2 className="pup2">Suitable for production in blends</h2>
      <img src="./images/products/foiler.png" alt="" className="puicon2" />
      <h2 className="pup1">Suitable for foliar application</h2>
      <img src="./images/products/irrigation.png" alt="" className="puicon3" />
      <h2 className="pup3">Suitable for irrigation systems  </h2>
      <div className="pudiv"></div>
      <div className="pudiv2"></div>
      <table>
        <tr>
          <td>Appearance</td>
          <td>White Prills</td>
        </tr>
      <tr>
              <td>Total nitrogen (N), min</td>
              <td>46.2%</td>
            </tr>
            <tr>
              <td>Biuret, max</td>
              <td>1%</td>
            </tr>
            <tr>
              <td>Moisture, max</td>
              <td>0.3%</td>
            </tr>
            <tr>
                <td>
                Granulometric Composition: <br /><br />
                under 1 mm, max. <br /><br />
                1-4 mm, min. <br /><br />
                under 6 mm <br />
                </td>
                <td><br /><br />
                3% <br /><br /> 
                94% <br /><br />
                100% 
                </td>
            </tr>
            <tr>
              <td>Granule static strength of granules, min </td>
              <td>0.7 kgF/granule</td>
            </tr>
            <tr>
              <td>Friability</td>
              <td>100%</td>
            </tr>
      </table>
    </div>
  </div>
</>
  )
}

export default Prilledurea
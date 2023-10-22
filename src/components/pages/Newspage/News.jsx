import React from 'react'
import { NavLink } from "react-router-dom";
import "./News.css"
import { Helmet } from 'react-helmet';

const News = () => {
  return (
    <>
    <div className="mainnewsletter">
    <Helmet>
            <title>News - The Finest Yield</title>
            <meta name="description" content="Newsletter component" />
        </Helmet>
        <div className="newscontent">
            <img src="./images/home/news.png" alt="" />
            <h1>Join Our Newsletter</h1>
            <p>Stay updated with Supreme Chemicals on LinkedIn for the latest fertilizer industry developments. Join our newsletter for valuable insights, company innovations, and sustainability solutions. Follow us on LinkedIn and subscribe today to stay at the forefront of fertilizer advancements. Connect with us for expert knowledge and news.</p>
            <h2>Click here to follow</h2>
            <NavLink to="https://www.linkedin.com/company/supreme-chemical/"><button>Follow</button></NavLink>
        </div>
    </div>
    </>
  )
}

export default News
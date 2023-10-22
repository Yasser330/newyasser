import React from 'react'
import "./Contact.css"
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
    <div className="maincontact">
    <Helmet>
            <title>Contact Us - The Finest Yield</title>
            <meta name="description" content="Contact Us component" />
        </Helmet>
        <div className="contactcontent">
            <img src="./images/home/contact.png" alt="" className='contact1'/>
            <h1>Contact Us</h1>
            <img src="./images/home/info.png" alt="" className="contact2" />
            <h2 className="ceo">Chief Executive Officer</h2>
            <img src="./images/home/email.png" alt="" className="contact3" />
            <p className='ceoemail'>123example@gmail.com</p>

            <img src="./images/home/info.png" alt="" className="contact4" />
            <h2 className="sales">Sales Manager</h2>
            <img src="./images/home/email.png" alt="" className="contact5" />
            <p className='salesemail'>123example@gmail.com</p> 

            <img src="./images/home/info.png" alt="" className="contact6" />
            <h2 className="info">Customer Support</h2>
            <img src="./images/home/email.png" alt="" className="contact7" />
            <p className='infoemail'>123example@gmail.com</p> 
        </div>
    </div>
    </>
  )
}

export default Contact
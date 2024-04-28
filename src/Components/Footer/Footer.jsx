import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className ='companylogo'src={assets.Emlogo} alt="" />
                <p>We are the students of Software Engineering Project Class.This is the front end of our project which is in Phase 2.</p>
                <div className="social-icons">
                    <img src={assets.x_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="div footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>Help</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>TO GET HELP</h2>
                <ul>
                    <li>+905301234567</li>
                    <li>contact@em.com</li>
                </ul>

            </div>
        </div>
        <hr />
      
    </div>
  )
}

export default Footer

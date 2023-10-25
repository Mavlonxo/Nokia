import React from 'react'
import './Footer.css'
import footerLogo from '../../assets/logo.svg'
import {AiFillInstagram, AiFillYoutube,AiOutlineTwitter } from 'react-icons/ai'
// import {BsFacebook} from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer__one">
       <img src={footerLogo} alt="" />
      </div>
      <hr />
      <div className="footer__two">
        <h4>
        Looking for Nokia licensed products?
        </h4>
        <h4>
        Experience centers
        </h4>
        <h4>Nokia EDU and training</h4>
        {/* <h4>   
Sustainability
        </h4> */}
      </div>
      <hr />

      <div className="footer__three">
        <ul>
          <li>Contact us</li>
          <li>Support</li>
          <li>Extranet Access</li>
        </ul>
        <button>Subscribe for our latest news</button>
        <AiFillInstagram id='footer__icon' />
        <AiFillYoutube id='footer__icon' />
        <AiOutlineTwitter id='footer__icon' />
        {/* <BsFacebook id='footer__icon' /> */}
      </div>
      <hr />
      <div className="footer__four">
        <ul>
          <li>©2023 Nokia all rights reserved</li>
          <li>Cookies</li>
          <li>Privacy</li>
          <li>Terms of use</li>
        </ul>

      </div>

    </div>
  )
}

export default Footer
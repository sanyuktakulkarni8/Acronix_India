import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'

import { FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
   <section id='footer' className='footer'>
    <div className='footer__div'>
    <a href="#" className='footer__logo'> Acronix India </a>

    <ul className="permalinks">
      
      <li><h4>GST No. 30HAVPK760461ZI</h4></li>
      <li><h4><IoMdCall fontSize={20}/> 9325513440/8007393882</h4></li>
      <li><h4><a href='https://maps.app.goo.gl/6QgwmTevuYQz1YYt9' target="_blank"><MdLocationOn/> A2 Rajniketan,behind saraswati temple<br/>Tisk,Ponda-Goa </a></h4></li>
      <li><h4>PIN: 403401 </h4></li>
      <li><h4><MdOutlineMail/> acronixindia@gmail.com</h4></li>
      
    </ul>

    <div className="footer__socials">
      <a href='https://www.linkedin.com/company/acronixindia/'><FaLinkedin/></a>
      <a href='https://www.instagram.com/acronixindia?igsh=MTU2MXU3c3ptdDYzZA=='><BsInstagram/></a>
      <a href="https://www.facebook.com/acronixindia/"><FaFacebook/></a>
    </div>

    <div className="footer__copyrights">
      <p>
        &copy; Acronix,all rights reserved
      </p>
    </div>
    

    </div>
   </section>
  )
}

export default Footer

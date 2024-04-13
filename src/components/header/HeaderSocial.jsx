import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import { FaInstagram } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/company/acronixindia/' target='_blank'> <BsLinkedin/></a>
      <a href='https://www.instagram.com/acronixindia?igsh=MTU2MXU3c3ptdDYzZA==' target='_blank'><FaInstagram/></a>
      
    </div>
  )
}

export default HeaderSocial

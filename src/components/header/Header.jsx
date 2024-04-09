import React from 'react'
import './header.css';
import CTA from './CTA';
import Logo from '../../assets/Logo.png'
import HeaderSocial from './HeaderSocial';
import acro_nameplate from '../../assets/acro_nameplate.png'

const Header = () => {
  return (
    <div id='hero'>
      <header>
        
        <div className="container header__container">
            {/* <h1>Acronix India</h1> */}
            <div className='title'>
                <img src= {acro_nameplate}  alt="" />
            </div>
            <h2>Grab the future</h2>
            <h5 className="text-light">We are bulk ,wholesale and retail suppliers of Electronic and Robotic components also conduct workshops</h5>
             <CTA/>
             <HeaderSocial/>
            <div className='me'>
                 <img src={Logo} alt="me" />
            </div>

            <a href='#contact' className='scroll__down'>SCROLL DOWN </a>
        </div>
      </header>
    </div>
  )
}

export default Header

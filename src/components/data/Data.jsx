import React from 'react'
import './Data.css'
import {LuAward} from 'react-icons/lu'
import { FaRobot } from "react-icons/fa";
import {RiServiceLine} from 'react-icons/ri'
import { FaBookReader } from "react-icons/fa";
import { ImCheckmark2 } from "react-icons/im";


const Data = () => {
  return (
   <section id='data'>
    <h5 className='headers1'>Our Data</h5>
    <h2 className='headers2'>Details</h2>
    <div className='container about__container'>
      <div className="about__cards">
        
          <article className='about__card'>
            <LuAward className='about__icon'/>
            <h5 > 5+ years of experience</h5>
          </article>

          <article className='about__card'>
            <FaRobot  className='about__icon'/>
            <h5 > 15+ workshops conducted</h5>
          </article>

          <article className='about__card'>
            <FaBookReader className='about__icon'/>
            <h5 > 1000+ students trained</h5>
          </article>

      </div>
        
      <div className='about_secondrow'>

          <article className='about__card'>
            <ImCheckmark2 className='about__icon'/>
            <h5 > 8+ subject experts</h5>
          </article>

          <article className='about__card'>
            <RiServiceLine className='about__icon'/>
            <h5 > 15+ clients</h5>
          </article>
      </div>

    </div>
    </section>
  )
}

export default Data

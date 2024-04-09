import React from 'react'
import './Data.css'
import Services from '../../assets/Services.png'
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
      
       {/* <div className='about__me'>
        
        <div className="about__me-image">
          <img src={Services} alt="me" />
        </div>
      </div>   */}
      
      
      {/* <div className='about__content'> */}
       
       <div className="about__cards">
        
        <article className='about__card'>
          <LuAward className='about__icon'/>
          <h5 > 5+ years of experience</h5>
          {/* <small>3+ years working</small> */}
        </article>

        <article className='about__card'>
          <FaRobot  className='about__icon'/>
          <h5 > 15+ workshops conducted</h5>
          {/* <small>300+ clients worldwide</small> */}
        </article>

        <article className='about__card'>
          <FaBookReader className='about__icon'/>
          <h5 > 1000+ students trained</h5>
          {/* <small> 80+ projects</small> */}
        </article>
         

        </div>
        <div className='about_secondrow'>

        <article className='about__card'>
          <ImCheckmark2 className='about__icon'/>
          <h5 > 8+ subject experts</h5>
          {/* <small> 80+ projects</small> */}
        </article>

        <article className='about__card'>
          <RiServiceLine className='about__icon'/>
          <h5 > 15+ clients</h5>
          {/* <small> 80+ projects</small> */}
        </article>
        </div>

        {/* <p>
        I am an enthusiastic, self-motivated, reliable, responsible and hard working person. 
        I am a mature team worker and adaptable to all challenging situations. 
        I am able to work well both in a team environment as well as using own initiative.
        I am able to work well under pressure and adhere to strict deadlines.
        </p> */}

        {/* <a className='btn btn-primary'>Lets talk</a> */}

       
      </div>
    
    
    {/* </div> */}

   </section>
  )
}

export default Data

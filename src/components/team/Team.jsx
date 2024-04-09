import React from 'react'
import './Team.css'
import { FaLinkedin } from "react-icons/fa";

// import me from '../../assets/me.png'

const data=[
  {
    id: 1,
    // image: me,
    title:'Aaditya Kamat' ,
    details:"Founder - Acronix India,\nCreator - Goan Foodoholic,\nAerospace Systems Engineer - Infosys",
    linkdn:'https://www.linkedin.com/in/aadityakamat',
    
    },
  {
    id:2,
    // image:me,
    title:'Emmanuel Lobo' ,
    details:"Academic Specialist - Acronix India,\nSenior Design Engineer - Bosch Syntegon,",
    linkdn:'https://www.linkedin.com/in/emmanuellobo3899',
      
    },
  {
    id:3,
    // image:me,
    title:'Aman Naik' ,
    details:"Academic Specialist - Acronix India,\nResearch Fellow - GSPCB",
    linkdn:'https://www.linkedin.com/in/amannaiknov',
        
      },
  {
    id:4,
    // image:me,
    title:'Pratik Phadte' ,
    details:"Tutor - Acronix India,\nTeach for Goa Fellow - CARES",
    linkdn:'https://www.linkedin.com/in/pratikphadte',
          
      },
  
  
    
]

const Team = () => {


  return (
    <section id='team'>
        <h5 className='headers1'>Confederates</h5>
        <h2>Our Team</h2>

        <div className="container portfolio__container">
        {  
              data.map(({id,title,details,linkdn})=>{
              return(
                <article key={id} className="portfolio__item">
                          <div className='without_button'>
                              <h2>{title}</h2>
                              <h5>
                                  {details.split('\n').map((paragraph) => {
                                        return <p>{paragraph}</p>
                                  } )}
                              </h5>
                          </div>
                    
                    
                          <div className="portfolio__item-cta">
                              <a href={linkdn} className='linkdn' target='_blank' > <FaLinkedin size={70} color='#0077B5'/></a>
                          </div>
        
                </article>
              )
       })
      }
     
       
      </div>
    </section>
  )
}

export default Team

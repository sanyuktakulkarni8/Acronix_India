import React from 'react'
import './Clients.css'
import me from '../../assets/me.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import GovernmentOfGoa from '../../assets/GovernmentOfGoa.png';
import Infinyt3d from '../../assets/Infinyt3d.png'
import RIT from '../../assets/RIT.png'
import Funskool from '../../assets/Funskool.jpg'
import FSAI from '../../assets/FSAI.jpg'
import agrologo from '../../assets/agrologo.jpg'




const data=[
  { 
    avatar: GovernmentOfGoa,
    nameclient:'Government of Goa',
    
    },
    
    { 
    avatar: agrologo,
    nameclient:'Powerland agro'
   
    },
    { 
    avatar: Infinyt3d,
    nameclient:'Infinyt 3D'
   
    },
    { 
    avatar: RIT,
    nameclient:'RITE'
   
    },
    { 
    avatar: Funskool,
    nameclient:'Funskool'
   
    },
    { 
      avatar: FSAI,
      nameclient:'FSAI'
     
      }
]

const Clients = () => {
  return (
    <section id='clients'>
      <h5 className='headers1'>Collaborations</h5>
      <h2 className='headers2'>Our Clients</h2>
      
      <Swiper className="container client__container"
        modules={[Pagination,Navigation,Scrollbar]}
        // spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
      >
      
     
        {
          data.map(({avatar,nameclient},index)=>{

            return(
                    <SwiperSlide key={index} className="testimonial">
                      <div className="client__avatar">
                          <img src={avatar} alt="client1" className='client_logo' />
                      </div>
                      <h4 className='client__name'> {nameclient} </h4>
                  
                    </SwiperSlide>
                  )
          })
        }


        
      </Swiper>
    </section>
  )
}

export default Clients

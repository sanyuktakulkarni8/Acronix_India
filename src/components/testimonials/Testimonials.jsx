import React from 'react'
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const data=[
  { 
    
    nameclient:'~Suyash Madale, IIT Goa',
    review: '"More than just high-quality products, Acronix India provides a fantastic customer experience. Their commitment to friendly service creates a welcoming atmosphere where you feel valued and appreciated."'
    
    },
    
    { 
    
    nameclient:'~Satchidanand Kamat, Mahila Nutan High School',
    review: '"Acronix and their team are very supportive and helpful. They helped me in my difficult situation with their efforts and I would like to recommend it to all robotic enthusiasts. Also the prices are very reasonable."',

    },
    { 
    
    nameclient:'~Aaron Gracias, Goa College of Engineering',
    review: '"If you need some electronic components urgently, Acronix India is the place to go. Quick and efficient delivery, products as per specifications, relatively cheap prices, quality of products is also very good. Doing a great job Acronix India, keep it up!!"',
    
    },
    { 
    
    nameclient:'~Rohit Jain',
    review: '"Quality product in Goa for all Arduino based projects. You may get more product based on your requirements with a single call. Reasonable prize with quality product. You can also visit to their store for more details about project and product. I like their services."',


    },
    
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
          <h5 className='headers1'>Reviews</h5>
          <h2>Testimonials</h2>
          <Swiper className="container testimonials__container"
            modules={[Pagination,Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
      
     
          {
              data.map(({avatar,nameclient,review},index)=>{
                  return(
                        <SwiperSlide key={index} className="testimonial">
                            <div className='client__review__div'>
                              <p className='client__review'>
                                  {review}
                              </p>
                            </div>


                            <div className='client__name__div'>
                              <h5 className='client__name'> 
                                    {nameclient}
                              </h5>
                            </div>
                              
                        </SwiperSlide>


            )
          })
        }


        
          </Swiper>
    </section>
  )
}

export default Testimonials

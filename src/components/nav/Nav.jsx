import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiServiceLine} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'
import { FaBook } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdThumbsUp } from "react-icons/io";
import { useState } from 'react'
import {Link,Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'


const Nav = () => {
    const scrollTo = (d) => {
        scroll.scrollTo(d); // Scrolling to 100px from the top of the page.
      };
//   const[activeNav, setActiveNav] = useState()
  
  

//   return (
   
//     <nav>
      
//       <Link to="/" 
//       spy={true} 
//       smooth={true} 
//       offset={0} 
//       duration={300}  onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></Link>
   

//       <Link to='data' 
//       spy={true} 
//       smooth={true} 
//       offset={0} 
//       duration={300}  onClick={()=>setActiveNav('#Data')} className={activeNav === '#Data' ? 'active' : ''}><FaBook/></Link>
      
      
//       <Link to='clients'
//       spy={true} 
//       smooth={true} 
//       offset={0} 
//       duration={300} onClick={()=>setActiveNav('#Clients')} className={activeNav === '#Clients' ? 'active' : ''}><RiServiceLine/></Link>
      
//       <Link to='team'
//       spy={true} 
//       smooth={true} 
//       offset={0} 
//       duration={300}  onClick={()=>setActiveNav('#Team')} className={activeNav === '#Team' ? 'active' : ''}><RiTeamFill/></Link>
      
//       <Link to='testimonials'
//       spy={true} 
//       smooth={true} 
//       offset={0} 
//       duration={300} onClick={()=>setActiveNav('#Testimonials')} className={activeNav === '#Testimonials' ? 'active' : ''}><IoMdThumbsUp/></Link>
      
//       <Link to='contact'
//       spy={true} 
//       smooth={true} 
//       offset={0} 
//       duration={300} onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiFillMessage/></Link>
      

//     </nav>
    
//   )
// }


//----------------New Nav Bar----------------//
const [click, setClick] = useState(false)
    //const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
      
        
            <nav className='navbar'>
                
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                    <Link to="hero" 
                        spy={true} 
                        smooth={true} 
                        offset={100} 
                        duration={200}  onClick={closeMenu} ><AiOutlineHome/>
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to="data" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={200}  onClick={closeMenu} ><FaBook/>
                    </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to="clients" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={200}  onClick={closeMenu} ><RiServiceLine/>
                    </Link>
                    </li>
                        
                    <li className='nav-item'>
                    <Link to="team" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={200}  onClick={closeMenu} ><RiTeamFill/>
                    </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to="testimonials" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={200}  onClick={closeMenu} ><IoMdThumbsUp/>
                    </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-100} 
                        duration={200}  onClick={closeMenu} ><AiFillMessage/>
                    </Link>
                    </li>


                </ul>
            </nav>
      
    )
}
export default Nav

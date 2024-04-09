import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
const form=useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_uf7nfhd', 'template_l3fahqo', form.current, 'ryoGXOGiKCnIxaBzh')
.then((result) => {
      console.log(result.text);
    }, (error) => {
    console.log(error.text);
    });
    e.target.reset();
};


return (
          
    <section id='contact'>
        <h5>Get in touch</h5>
        <h2> Contact us</h2>

        <div className="container contact__container">
          <div className="contact__options">
          
            <article className="contact__option">
             
             <AiOutlineMail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>acronixindia@gmail.com</h5>
             <a href="mailto:acronixindia@gmail.com" target='_blank'>Send a mail</a>

            </article>

            {/* <article className="contact__option">
             
            <AiOutlineMail className='contact__option-icon'/>
            <h4>messenger</h4>
            <h5>Acronix India</h5>
            <a href="mailto:sanyuktakulkarni8@gmail.com">Send a mail</a>
            </article>  */}

            <article className="contact__option">
             
             <BsWhatsapp className='contact__option-icon'/>
             <h4>Whatsapp</h4>
             <h5>Acronix India</h5>
             <a href="https://api.whatsapp.com/send?phone=9325513440">Whatsapp</a>

            </article>
          
          </div>
          

            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='your name' required />
              <input type='text' name='email' placeholder='your email' required />
              <textarea name="message"  rows="7" placeholder=' your message'></textarea>
              <button type='submit' className='btn btn-primary' >send message</button>

            </form>
        
        

      </div>
      
    </section>
  )
}

export default Contact

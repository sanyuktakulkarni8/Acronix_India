import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Data from './components/data/Data';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/contacts/Contact';
import Team from './components/team/Team';
import Clients from './components/clients/Clients';

import './App.css';





const App = () => {
  return (
    <div >
    
          
          <Header/>
          <Nav/>
          <Data/>
          <Clients/>
          <Team/>
          <Testimonials/>
          <Contact/>
          <Footer/>
    </div>
    
  )
}

export default App

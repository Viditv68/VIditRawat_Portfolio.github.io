import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/logo.jpg';
import  '/src/styles.css';
import '/src/contact.css';
export default function Layout() {
  return (
    <>
       <div className="fullBody">
      <h1>Vidit Rawat</h1>
      <img className='vidit' src={logo} alt='Vidit Rawat' />
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/service">Service</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      </div>
      
    </>
    
  );
}

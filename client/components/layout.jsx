import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <h1>Vidit Rawat</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}
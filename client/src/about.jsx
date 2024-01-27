import React from 'react';
import { Link } from 'react-router-dom';


export default function About() {
    return (
      <>
        <img className="profile-photo" src= "src/Images/Profile.jpg" width={500} height={300}  alt={"Vidit Rawat"}/>
        <p>
            I’m a game developer whose aim is to be the best developer.
            I wanted to become a game developer since I started playing games.
            I always used to think that, how the character is moving, shooting etc. So why not to create games.
            Get in touch if you love playing games or making games.
    </p>
    
    <Link
    to="route"
    onClick={(event) => { event.preventDefault(); window.open("src/Resume/ViditRawat_Resume.pdf"); }}>
        Resume
</Link>

      </>
    );
  }
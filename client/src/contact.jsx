import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
    return (
      <>

            <section id="firstbackground">
                <div className="secondbackground">
                <img className="profile-photo" src= "src/Images/Profile.jpg" width={500} height={300}  alt={"Vidit Rawat"}/>
                    <h3 className= "title-name">Vidit Rawat</h3>
                    <h5 className="second-mail">Game Developer - viditrawatv68@gmail.com</h5>
                     <h5 className="adress"><i class="fas map fa-map-marker-alt"></i> Scarborough, Canada</h5>
                       <div className="title-logo">
                        <a href="https://www.linkedin.com/in/vidit-rawat-baa13816b/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://github.com/Viditv68"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    </div>             
                    <div className="wrapper">
                        <h2>Contact Me</h2>
                        <div id="error_message">
                     </div>
                            <form action="https://api.web3forms.com/submit" method="POST" >
                            <input type="hidden" name="access_key" value="cb511c27-8b6d-439b-9ef4-67ad1a01b2bf"></input>
                          <div className="input_field">
                              <input type="text" placeholder="Name" name ="name"></input>
                          </div>
                          <div className="input_field">
                              <input type="text" placeholder="Subject" id="subject"></input>
                          </div>
                          <div className="input_field">
                              <input type="text" placeholder="Phone" name ="phone"></input>
                          </div>
                          <div className="input_field">
                              <input type="text" placeholder="Email" name ="email"></input>
                          </div>
                          <div className="input_field">
                              <textarea placeholder="Message" name ="message"></textarea>
                          </div>
                          <div className="btn">
                              <input type="submit"></input>
                          </div>
                        </form>
                      </div>
                      </div>
                      </section>
    <section id="footer">
        <div className="copyright">&copy; 2023 Vidit Rawat</div>
    </section>

      </>
    );
  }
  
  
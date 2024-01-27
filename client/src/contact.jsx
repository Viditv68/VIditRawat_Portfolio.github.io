export default function Contact() {
    return (
      <>
         <p>Contact</p>
            <section id="firstbackground">
                <div class="secondbackground">
                <img className="profile-photo" src= "src/Images/Profile.jpg" width={500} height={300}  alt={"Vidit Rawat"}/>
                    <h3 class="title-name">Vidit Rawat</h3>
                    <h5 class="second-mail">Game Developer - viditrawatv68@gmail.com</h5>
                     <h5 class="adress"><i class="fas map fa-map-marker-alt"></i> Scarborough, Canada</h5>
                       <div class="title-logo">
                        <a href="https://www.linkedin.com/in/vidit-rawat-baa13816b/"><i class="logo fab fa-linkedin"></i></a>
                        <a href="https://github.com/Viditv68"><i class="logo fab fa-github-square"></i></a>
                    </div>             
                    <div class="wrapper">
                        <h2>Contact Me</h2>
                        <div id="error_message">
                     </div>
                            <form action="https://api.web3forms.com/submit" method="POST" >
                            <input type="hidden" name="access_key" value="cb511c27-8b6d-439b-9ef4-67ad1a01b2bf"></input>
                          <div class="input_field">
                              <input type="text" placeholder="Name" name ="name"></input>
                          </div>
                          <div class="input_field">
                              <input type="text" placeholder="Subject" id="subject"></input>
                          </div>
                          <div class="input_field">
                              <input type="text" placeholder="Phone" name ="phone"></input>
                          </div>
                          <div class="input_field">
                              <input type="text" placeholder="Email" name ="email"></input>
                          </div>
                          <div class="input_field">
                              <textarea placeholder="Message" name ="message"></textarea>
                          </div>
                          <div class="btn">
                              <input type="submit"></input>
                          </div>
                        </form>
                      </div>
                      </div>
                      </section>
    <section id="footer">
        <div class="copyright">&copy; 2023 Vidit Rawat</div>
    </section>

      </>
    );
  }
  
  
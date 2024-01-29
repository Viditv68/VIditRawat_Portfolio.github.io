/* File Name: project.jsx
Student's Name: Vidit Rawat
Student;s Id: 301391326
Date: 28th January 2024 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHippo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import  '/src/program.css';

export default function Project() {
    return (
      <>
        <section>
        <div class ="fullBody">
        <div class="projects-title"><h1 class="programming">Projects</h1></div>
        <div>
          <img className="profile-photo" src= "src/Projects/Images/UltimateShooter.png" alt={"Vidit Rawat"}/>
          <div className="github">
            <a href="https://github.com/Viditv68/UltimateShooter"><FontAwesomeIcon icon={faGithub} size="2x" bounce /></a>
          </div>
          <div className="programming">Ultimate Shooter (C++ & UE5)</div>   
          <div className="wall-and-eve-description">
          - Use of animation blueprint for run, shoot, and jump.<br></br>
          - Implementation of aiming and zoom functionality with help of state machine pattern.<br></br>
          - mplementation of weapon throw and pick up functionality.<br></br>
          </div>
          <div>
          <img className="profile-photo" src= "src/Projects/Images/BattleTank.png" alt={"Vidit Rawat"}/>
          <div class="title">
            <a href="https://github.com/Viditv68/battle-tank-game"><FontAwesomeIcon icon={faGithub} size="2x" bounce /></a>
          </div>
          <div class="programming">Battle Tank (C# & Unity)</div>   
          <div className="wall-and-eve-description">
          - Implementation of MVC design pattern for player tank, enemy tank and bullets.<br></br>
          - Implementation of generic singleton class and generic object pool.<br></br>
          - Use of scriptable objects for creating different types of tanks.<br></br>
          - Implementation of state design pattern for different states of enemy tank i.e. patrolling, chasing and attack state.<br></br>
          - Use of nav-mesh component for movement of enemy tank.<br></br>
          - Shooting mechanism for both player tank and enemy tank.<br></br>
          - Use of observer pattern for implementing achievement system.<br></br>
          - Randomized spawning of different types of tanks. UI for health.<br></br>
          </div>
        </div>

        <div>
          <img className="platformer-2d" src= "src/Projects/Images/2DPlatformer.png" alt={"Vidit Rawat"}/>
          <div class="github1">
            <a href="https://github.com/Viditv68/2D-Platformer-Game"><FontAwesomeIcon icon={faGithub} size="2x" bounce /></a>
          </div>
          <div class="programming">2D Platformer(C# & Unity)</div>   
          <div class="wall-and-eve-description">
            - Fully customizable level win conditions for each Level.<br></br>
            - Covers basic concepts of 2D Platformer like movement, layers, flipping, animations, etc.<br></br>
            - Customizable collectables.<br></br>
            - Levels unlocking system.<br></br>
            - AI for 2D patrolling enemy.<br></br>
            - Responsive UI for player’s health and collectables.<br></br>
          </div>
        </div>

        <div>
          <img className="shooter" src= "src/Projects/Images/SimpleShooter.png"  alt={"Vidit Rawat"}/>
          <div class="github1">
            <a href="https://github.com/Viditv68/SimpleShooter"><FontAwesomeIcon icon={faGithub} size="2x" bounce /></a>
          </div>
          <div class="programming">Simple Shooter(C++ & UE5)</div>   
          <div class="wall-and-eve-description">
            - Movement and animation of third person character.<br></br>  
            - Shooting mechanics. Player and enemy health / death.<br></br>  
            - Enemy AI using behavior trees.<br></br>  
            - Win and lose conditions.<br></br> 
            - Sound effects and particle systems.<br></br> 
          </div>
        </div>

        <div>
          <img className="toon-tanks" src= "src/Projects/Images/ToonTanks.png" alt={"Vidit Rawat"}/>
          <div class="github1">
            <a href="https://github.com/Viditv68/ToonTanks"><FontAwesomeIcon icon={faGithub} size="2x" bounce /></a>
          </div>
          <div class="programming">Toon Tanks(C++ & UE5)</div>   
          <div class="wall-and-eve-description">
            - Tank and turret movement implementation. <br></br>
            - Implementation of camera movements. <br></br>
            - Implementation of AI controled enemy tanks. <br></br> 
            - Shooting mechanis for player and enemy. <br></br>
            - Game loop and win conditions.<br></br> 
          </div>
        </div>
</div>
      

        </div>
        </section>
      </>
    );
  }
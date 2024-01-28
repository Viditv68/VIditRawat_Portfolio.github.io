export default function Project() {
    return (
      <>
        <p>My Projects</p>

        <section>
        <div class="projects-title"><h1 class="programming">Projects</h1></div>
        <div>
          <img className="profile-photo" src= "src/Projects/Images/UltimateShooter.png" width={500} height={300}  alt={"Vidit Rawat"}/>
          <div class="github1">
            <a href="https://github.com/Viditv68/UltimateShooter"><i class='logo github fab fa-github-square'></i></a>
          </div>
          <div class="Chef-Diary-title">Chef Diary: Cooking & Romance (C# & Unity)</div>   
          <div>
          - Use of animation blueprint for run, shoot, and jump.<br></br>
          - Implementation of aiming and zoom functionality with help of state machine pattern.<br></br>
          - mplementation of weapon throw and pick up functionality.<br></br>
          </div>
          <div>
          <img className="profile-photo" src= "src/Projects/Images/BattleTank.png" width={500} height={300}  alt={"Vidit Rawat"}/>
          <div class="github1">
            <a href="https://github.com/Viditv68/battle-tank-game"><i class='logo github fab fa-github-square'></i></a>
          </div>
          <div class="Battle-Tank-title">Battle Tank (C# & Unity)</div>   
          <div>
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
          <img className="platformer-2d" src= "src/Projects/Images/2DPlatformer.png" width={500} height={300}  alt={"Vidit Rawat"}/>
          <div class="github1">
            <a href="https://github.com/Viditv68/2D-Platformer-Game"><i class='logo github fab fa-github-square'></i></a>
          </div>
          <div class="2D-Platformer-Title">2D Platformer(C# & Unity)</div>   
          <div>
            - Fully customizable level win conditions for each Level.<br></br>
            - Covers basic concepts of 2D Platformer like movement, layers, flipping, animations, etc.<br></br>
            - Customizable collectables.<br></br>
            - Levels unlocking system.<br></br>
            - AI for 2D patrolling enemy.<br></br>
            - Responsive UI for player’s health and collectables.<br></br>
          </div>
        </div>
        </div>
        </section>
      </>
    );
  }

import styles from "./about.module.css";

const About = () => {
  return (
      <div id="about-me" className={styles.aboutMe}>

              <div className={styles.aboutMe1}>ABOUT ME</div>


              <div className={styles.aboutContainer}>

                <div className={styles.aboutContainerText}>
                  <span className={styles.helloHandsome}>
                    <span>Hello Handsome,</span>
                    <br />
                    <span>{`I am `}</span>
                    <span className={styles.savannahStar}>Savannah Star,</span>
                    <span> your perfect girlfriend. I can give you the time of your life. I'm open & 
                    <span>{" "}</span>
                    <span className={styles.ofYourLifeImOpenNaugh}>
                      Naughty for you.
                    </span>
                    <span>{" "}</span>
                    Perfect blonde Australian with a mind and body for
                      adventure, I might just be your next addiction....
                  </span>
                  </span>
                </div>

                  <img src="https://i.pinimg.com/originals/cc/16/10/cc161034cdc927b21488e110fda730cf.png" />

              </div>

              <div className={styles.aboutContainer}>
              <img src="https://i.pinimg.com/originals/c4/9a/99/c49a994500b480b0a5ff4e17cc7b9259.png" />
                <div className={styles.aboutContainerText}>
                  <span>
                  I am a beautiful 
                  <span className={styles.whiteBlonde}> white blonde, </span>
                   
                  with a very down to earth attitude. 
                  I like to blur the lines between fantasy and 
                  <span>{" "}</span>
                  <span className={styles.reality}>
                    reality.
                  </span> 
                  <span>{" "}</span>
                  Whether it's a fun-loving few hours of naughty delights, an evening of seduction and pleasure or a romantic vacation together 
                  - I'm sure I'll be your perfect high class companion.
                  </span>
                    
                </div>

                  

              </div>



              <div className={styles.aboutContainer}>
              
                <div className={styles.aboutContainerText}>
                  <span>
                  Perhaps, like me, you crave the 
                  <span className={styles.connection}> Connection </span>  
                  that is itself an escape from the 
                  <span className={styles.stress}> stress and tedium of Life,  </span>  
                  where all of your complexities and desires are not only welcome but celebrated. I exude class and confidence so am the perfect companion for a date when you need a girl who can talk the talk as well as walk the walk. 
                   
                  </span>
                    
                </div>

                <img src="https://i.pinimg.com/originals/c0/68/ad/c068adad944a89f301ab748f186895b5.png" />

              </div>



              <div className={styles.aabouttext}>
              I'll be your favourite 
              <span className={styles.luxury}> luxury experience, a sensual sweet kitten  </span>  
              and your little devil in disguise.
              </div>

        
      </div>
  );
};

export default About;


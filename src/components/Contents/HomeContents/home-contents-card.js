import styles from "./home-contents-card.module.css";
import dawn from '../../../assets/img/dawn.svg';

const HomeContentsCard = () => {
  return (
    <div className={styles.homeContents}>
      <div className={styles.rates}>
        <div className={styles.jbsParent}>

          <BodyInfo title="5.5 ft" info="Perfect height for perfect experience" />

          <img className={styles.dawnIcon} alt="" src={dawn} />

          <BodyInfo title="Blonde" info="Perfect blonde hair with a pretty face" />

          <img className={styles.dawnIcon} alt="" src={dawn} />

          <BodyInfo title="Slim" info="Maintained slim type body" />
          
        </div>
      </div>
    </div>
  );
};

export default HomeContentsCard;



function BodyInfo({title, info}) {
  return (
    <div>
    <div className={styles.ft}>{title}</div>
    <p className={styles.perfectHeightFor}>{info}</p>
      
      {/* <p className={styles.perfectExperience}>{info}</p> */}
  </div>
  );
}
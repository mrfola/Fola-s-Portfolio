import styles from "./Hero.module.scss";
import Button from "../../UI/atoms/Button/Button";

const Hero = () => 
{
    return ( 
        <div className={styles.hero}>
            <div className={styles.preHeading}>
                Hi there,
            </div>
            <div className={styles.heading}>
                <h1>I’m <span>FOLARANMI JESUTOFUNMI,</span><br/> a web developer. </h1>
            </div>
            <div className={styles.subHeading}>
                I’m a software engineer specializing in building (and occasionally designing) 
                exceptional digital experiences. Currently, I’m focused on building accessible, 
                human-centered products at Upstatement.
            </div>
            <Button className={styles.button}>Contact Me!</Button>
        </div>
     );
}
 
export default Hero;
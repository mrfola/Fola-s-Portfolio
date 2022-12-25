import styles from "./MeetFola.module.scss";
import Button from "../../UI/atoms/Button/Button";

const MeetFola = () => 
{
    return ( 
        <div className={styles.meetFola}>
            <div className={styles.meetFolaIconAndLogoContainer}>
                <div className={styles.meetFolaIconAndLogo}>
                    <img src="https://res.cloudinary.com/dobmssrgt/image/upload/v1665154613/Fola%27s%20portfolio/meet-fola_fo9jwv.png" alt="" />
                    <div className={styles.meetFolaText}>
                        <span>Meet</span>
                        <img src="https://res.cloudinary.com/dobmssrgt/image/upload/v1665150233/Fola%27s%20portfolio/logo_reyqrm.svg" alt="" />
                    </div>
                </div>
            </div>
            

            <div className={styles.content}>
                <div className={styles.contentBlock}>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional 
                    digital experiences. Currently, I’m focused on building accessible, human-centered products
                    at Upstatement 
                </div>
                <div className={styles.contentBlock}>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional 
                    digital experiences. Currently, I’m focused on building accessible, human-centered products
                    at Upstatement 
                </div>
                <div className={styles.contentBlock}>
                    I’m a software engineer specializing in building (and occasionally designing) exceptional 
                    digital experiences. Currently, I’m focused on building accessible, human-centered products
                    at Upstatement 
                </div>
                <Button>Download CV</Button>
            </div>
        </div>
     );
}
 
export default MeetFola;
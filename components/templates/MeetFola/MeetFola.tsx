import styles from "./MeetFola.module.scss";

const MeetFola = () => 
{
    return ( 
        <div className={styles.meetFola}>
            <div className={styles.image}>
                <img src="https://res.cloudinary.com/dobmssrgt/image/upload/v1665154613/Fola%27s%20portfolio/meet-fola_fo9jwv.png" alt="" />
                <div>
                    <span>Meet</span>
                    <img src="https://res.cloudinary.com/dobmssrgt/image/upload/v1665150233/Fola%27s%20portfolio/logo_reyqrm.svg" alt="" />
                </div>

            </div>
            <div className={styles.content}>

            </div>
        </div>
     );
}
 
export default MeetFola;
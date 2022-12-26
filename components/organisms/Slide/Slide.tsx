import Image from "next/image";
import styles from "./Slide.module.scss";

export interface SlideProp
{
    img: 
    {
        src: string,
        alt: string,
        height: string,
        width: string
    }

    name: string;
    startDate: Date;
    endDate?: Date;
    projectDetails: Array<string>;
}

const Slide = ({img, name, startDate, endDate, projectDetails}: SlideProp) => 
{
    return (  
        <div className={styles.slides}>
            <Image className={styles.image} src={img.src} alt={img.alt} height={img.height} width={img.width}/>
            <div className={styles.project}>
                <div className={styles.name}>{name}</div>
                <div className={styles.name}>{startDate.getMonth()}</div>
                <div className={styles.projectDetails}>
                    <ul>{projectDetails.map((detail) => <li key="detail">{detail}</li>) }</ul>
                </div>
            </div>
        </div>
    );
}
 
export default Slide;
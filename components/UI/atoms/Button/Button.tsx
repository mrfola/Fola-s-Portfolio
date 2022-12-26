import { Url } from "url";
import styles from "./Button.module.scss";

export interface Props
{
    children: String,
    withAdornment?: Boolean,
    adornmentImage?: Url,
    className? : String,
    active?: Boolean
}


const Button = ({children, withAdornment, adornmentImage, className, active = false} : Props) => 
{
    return ( 
        <div className={`${styles.buttonContainer} ${className && className}`}>
            <button className={`${styles.button} ${!active && styles.inactiveButton}`}>
                {children}
            </button>
        </div>
        
     );
}
 
export default Button;
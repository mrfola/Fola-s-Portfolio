import { Url } from "url";
import styles from "./Button.module.scss";

export interface Props
{
    children: String,
    withAdornment?: Boolean,
    adornmentImage?: Url,
    className? : String
}


const Button = (props: Props) => 
{
    return ( 
        <div className={`${styles.buttonContainer} ${props.className}`}>
            <button className={styles.button}>
                {props.children}
            </button>
        </div>
        
     );
}
 
export default Button;
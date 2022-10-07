import { NextPage } from "next";
import styles from "./NavBar.module.scss";

const NavBar: NextPage = () => 
{
    return ( 
        <nav className={styles.navBar}>
            <ul className={styles.navLinks}>
                <li>About</li>
                <li>Work</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default NavBar;
import styles from "./Header.module.scss";
import NavBar from "../Navbar/NavBar";
import Logo from "../../UI/atoms/Logo/Logo";

const Header = () => 
{
    return ( 
        <div className={styles.header}>
            <Logo/>
            <NavBar/>
        </div>
     );
}
 
export default Header;
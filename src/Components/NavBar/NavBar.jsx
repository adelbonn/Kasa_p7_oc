import NavLink from '../NavBarLink/NavBarLink';
import Logo from '../Logo/Logo';
import styles from './NavBar.module.css';
import NavBarLinkContainer from '../NavBarLinksContainer/NavBarLinkContainer';  

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <Logo />
            <NavBarLinkContainer>
              <NavLink to ='/'>Accueil</NavLink>
              <NavLink to ='/about'>A propos</NavLink>
            </NavBarLinkContainer>
        </nav>
    )
}
export default NavBar;
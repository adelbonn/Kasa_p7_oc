import NavBarLink from '../NavBarLink/NavBarLink';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import NavBarLinkContainer from '../NavBarLinksContainer/NavBarLinkContainer';

const Header =() => {
    return (
        <header className={styles.navBar}>
            <Logo />
            <nav>
            <NavBarLinkContainer>
                <NavBarLink to ='/'>Accueil</NavBarLink>
                <NavBarLink to ='/about'>A propos</NavBarLink>
            </NavBarLinkContainer>
            </nav>
        </header>
    );
};
export default Header;
import NavBarLink from '../NavBarLink/NavBarLink';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';
import NavBarLinkContainer from '../NavBarLinksContainer/NavBarLinkContainer';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
            <Logo location="header"/> 
            <NavBarLinkContainer>
                <NavBarLink to ='/'>Accueil</NavBarLink>
                <NavBarLink to ='/about'>A propos</NavBarLink>
            </NavBarLinkContainer>
            </nav>
        </header>
    );
};
export default Header;
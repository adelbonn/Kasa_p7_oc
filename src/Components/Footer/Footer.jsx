// import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Logo location="footer"/>
            <p className={styles.footerText}>© 2020 Kasa. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
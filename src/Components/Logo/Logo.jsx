import { NavLink } from 'react-router-dom';

import styles from './Logo.module.css';


const Logo = () => {
  return (
    <NavLink to='/' className={styles.logo}> 
    <img src='src/assets/logo/LOGO.svg' alt='Logo Kasa' className={styles.logo} />
    </NavLink>
  )
}
export default Logo;
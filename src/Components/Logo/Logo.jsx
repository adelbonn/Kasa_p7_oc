import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';
import logoFooter from '../../assets/logo/LOGOFooter.svg';  
import logoHeader from '../../assets/logo/LOGO.png'

const Logo = ({ location }) => {
    const logoSrc = location === 'header' ? logoHeader : logoFooter;

  return (
    <NavLink to="/">
      <img src={logoSrc} alt="Logo Kasa" className={styles.logo}/>
    </NavLink>
  );
};

Logo.propTypes = {
location: PropTypes.oneOf(['header', 'footer']).isRequired,
};

export default Logo;
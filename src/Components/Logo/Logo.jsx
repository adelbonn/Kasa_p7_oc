import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import styles from './Logo.module.css';
import logoHeader from '../../assets/logo/LOGOHeader.svg';
import logoFooter from '../../assets/logo/LOGOFooter.svg';

const Logo = ({ location }) => {
    const logoSrc = location === 'header' ? logoHeader : logoFooter;
//   const combinedClassName = `${styles.logo} ${className}`;
//   const style = className.includes(styles.headerLogo)
//     ? { color: 'var(--primary-color)' }
//     : { color: 'var(--white-color)' };
// const logoSrc = className.includes(styles.headerLogo) ? logoHeader : logoFooter;

  return (
    <NavLink to="/">
      <img src={logoSrc} alt="Logo Kasa" />
    </NavLink>
  );
};

Logo.propTypes = {
location: PropTypes.oneOf(['header', 'footer']).isRequired,
};

export default Logo;
import styles from './NavBarLink.module.css';
import  { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


const NavBarLink = ({ to, children }) => {
    return (
        <NavLink 
        to={to} 
        className={({ isActive }) => 
            (isActive ? `${styles.navBarLinkItems} ${styles.active}` 
                : styles.navBarLinkItem)}
            >
            {children}
        </NavLink>
    );
};

NavBarLink.propTypes = {
    to: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired,
}

export default NavBarLink;
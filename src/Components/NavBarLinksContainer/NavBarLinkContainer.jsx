import PropTypes from 'prop-types';
import styles from './NavBarLinkContainer.module.css';

const NavBarLinkContainer = ({ children }) => {
    return (
        <ul className={styles.navBarLinkContainer}>
            {children}
        </ul>
    );
}

NavBarLinkContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
export default NavBarLinkContainer;
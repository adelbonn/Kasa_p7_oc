import PropTypes from 'prop-types';
import styles from './NavBarLinkContainer.module.css';
import React from 'react';

const NavBarLinkContainer = ({ children }) => {
    return (
        <ul className={styles.navBarLinkContainer}>
            {React.Children.map(children, (child) => (
                <li className={styles.navBarLinkItem}>{child}</li>
            ))}
            
        </ul>
    );
}

NavBarLinkContainer.propTypes = {
    children: PropTypes.node.isRequired,
};
export default NavBarLinkContainer;
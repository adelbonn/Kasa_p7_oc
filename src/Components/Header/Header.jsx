import PropTypes from 'prop-types';
import styles from './Header.module.css';
import NavBar from '../NavBar/NavBar';


const Header = ({ children }) => {
    return (
        <header className={styles.header}>
            <NavBar />    
            {children}
        </header> 
    );
};

Header.propTypes = {
    children: PropTypes.node,
}
export default Header;

 
           
import PropTypes from "prop-types";
import styles from './CollapseArrow.module.css'


const CollapseArrow = ({isOpen}) => {

    return <span className={ isOpen ? styles.arrowUp : styles.arrowDown}></span>;
}
CollapseArrow.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}


export default CollapseArrow;

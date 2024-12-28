import PropTypes from "prop-types";
import styles from './CollapseArrow.module.css'
import arrowUp from '../../../../assets/img/Arrow.svg';



const CollapseArrow = ({ isOpen }) => {
    return (
        <span className={`${styles.arrow} ${isOpen ? styles.arrowDown : styles.arrowUp}`}>
            <img src={arrowUp} alt="Arrow" className={styles.arrowImg} />
        </span>
    );
}

CollapseArrow.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}
export default CollapseArrow;


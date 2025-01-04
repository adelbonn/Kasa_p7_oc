import PropTypes from "prop-types";
import styles from './Arrow.module.css'
import arrowImg from '../../assets/img/Arrow.svg';



// const CollapseArrow = ({ isOpen }) => {
//     return (
//         <span className={`${styles.arrow} ${isOpen ? styles.arrowDown : styles.arrowUp}`}>
//             <img src={arrowUp} alt="Arrow" className={styles.arrowImg} />
//         </span>
//     );
// }

// CollapseArrow.propTypes = {
//     isOpen: PropTypes.bool.isRequired,
// }
// export default CollapseArrow;

const Arrow = ({ direction, handleClick, isOpen }) => {
    
 const arrowClass = direction ? styles[direction] : (isOpen ? styles.arrowDown : styles.arrowUp);
 return (
    <div
    className={`${styles.arrow} ${arrowClass}`}
    onClick={handleClick}
    >
    <img src={arrowImg} alt="Arrow" className={styles.arrow} />
    </div>
    );
};
Arrow.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']),
    handleClick: PropTypes.func,
    isOpen: PropTypes.bool,
}
export default Arrow;
import PropTypes from "prop-types";
import styles from './Arrow.module.css'
import arrowImg from '../../assets/img/Arrow.svg';





const Arrow = ({ direction, handleClick, isOpen }) => {
    
 const arrowClass = direction ? styles[direction] : (isOpen ? styles.arrowDown : styles.arrowUp);
 return (
    <div
      className={`${styles.arrow} ${arrowClass}`}
      
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-controls="collapse-content"
      role="button"
      
    >
      <img src={arrowImg} alt="Arrow" className={styles.arrowImg}  />
    </div>
    );
};
Arrow.propTypes = {
    direction: PropTypes.oneOf(['left', 'right']),
    handleClick: PropTypes.func,
    isOpen: PropTypes.bool,
}
export default Arrow;
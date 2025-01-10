
import PropTypes from 'prop-types';
import styles from './Ratings.module.css';
import StarActive from '../../Assets/img/Star-active.png';
import StarInactive from '../../Assets/img/Star-inactive.png';

const Ratings = ({ rating }) => {
  return (
    <div className={styles.ratingsContainer}>
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? StarActive : StarInactive}
          alt="Star"
          className={index < rating ? styles.starFilled : styles.starEmpty}
        />
      ))}
    </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.string.isRequired,
};

export default Ratings;
import PropTypes from 'prop-types';
import styles from './Tag.module.css';

const Tag = ({tags}) => {
    return(
        <div className={styles.tagsContainer}>
            {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
            ))}
         </div>
    );
};

Tag.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}
      
export default Tag;

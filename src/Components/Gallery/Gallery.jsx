
import styles from './Gallery.module.css';

import PropTypes from 'prop-types';


const Gallery = ({children}) => {
    return (
        <article className={styles.gallery}>
            {children}           
        </article>
    );
};

Gallery.propTypes = {
children: PropTypes.node.isRequired,
}
export default Gallery
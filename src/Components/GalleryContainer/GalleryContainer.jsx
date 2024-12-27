
import PropTypes from 'prop-types';
import styles from './GalleryContainer.module.css';

const GalleryContainer = ({ children }) => {
  return <section className={styles.galleryContainer}>{children}</section>;
};

GalleryContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GalleryContainer;
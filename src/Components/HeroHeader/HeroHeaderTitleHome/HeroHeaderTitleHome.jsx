import PropTypes from 'prop-types';
import styles from './HeroHeaderTitleHome.module.css';

const HeroHeaderTitleHome = () => {
return (
    <>
    <h1 className={styles.heroTitle}>Chez vous, partout et ailleurs</h1>
    </>
  );
};

HeroHeaderTitleHome.propTypes = {
    title: PropTypes.string,
};

export default HeroHeaderTitleHome;
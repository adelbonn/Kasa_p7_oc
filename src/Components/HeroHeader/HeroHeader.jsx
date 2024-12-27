
import PropTypes from 'prop-types';
import styles from './HeroHeader.module.css';

const HeroHeader = ({ image, title}) => {
    
    return (
        <div className={styles.heroHeader}>
            <img src={image} alt ='hero header' className={styles.heroImgHeader}/>
           {title && <h1 className={styles.heroTitle}>{title}</h1>}
        </div>
    );
};

HeroHeader.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
};

export default HeroHeader;
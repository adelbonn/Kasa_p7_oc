
import PropTypes from 'prop-types';
import styles from './HeroHeader.module.css';



const HeroHeader = ({ image, title, isTitleDisplayed}) => {
    
    return (
        <div className={styles.heroHeader}>
            <img src={image} alt ='hero header' className={styles.heroImgHeader}/>
           {isTitleDisplayed && title && <h1 className={styles.heroTitle}>{title}</h1>}
        </div>
    );
};

HeroHeader.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.node,
    isTitleDisplayed: PropTypes.bool,
};

export default HeroHeader;
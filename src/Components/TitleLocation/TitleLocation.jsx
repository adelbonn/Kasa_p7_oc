import styles from './TitleLocation.module.css';
import PropTypes from 'prop-types';

const TitleLocation = ({ title, location }) => {
    return (
        
           <div className={styles.titleLocation}>
                <h1>{title}</h1>
                   <p>{location}</p>
           </div>
      
    );
};

TitleLocation.propTypes = {
    title: PropTypes.string.isRequired, 
    location: PropTypes.string.isRequired,
}   

export default TitleLocation;
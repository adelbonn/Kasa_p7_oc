import propTypes from 'prop-types';
import styles from './Host.module.css'; 


const Host = ({ host }) => {
    return (
        <div className={styles.hostContainer}> 
            <p className={styles.hostName}>{host.name}</p>
            <img src={host.picture} alt="host" className={styles.hostPicture} /> 
           
        </div>
    );
};  

Host.propTypes = {
    host: propTypes.shape({
        name: propTypes.string.isRequired,
        picture: propTypes.string.isRequired,
    }).isRequired,
};
export default Host;


import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';



const Card = ({ logement }) => {


    return (
      <Link to={`/property/${logement.id}`} className={styles.card}>  {/*ici je crée un lien vers la page property en passant l'id du logement en paramètre*/}
        <figure className={styles.cardImageContainer}>
        <img src={logement.cover} alt={logement.title} className={styles.cardImage} />
        <figcaption className={styles.cardTitle}>{logement.title}</figcaption>
        </figure>
      </Link>
    );
  };

  Card.propTypes = {
    logement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
    }).isRequired,
  };

  export default Card;
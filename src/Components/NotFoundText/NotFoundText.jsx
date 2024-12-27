import styles from './NotFoundText.module.css';
import { NavLink } from 'react-router-dom';

const NotFoundHeroHeaderText = () => {
    return (
        <>
        <h2 className={styles.NotFoundText}>Oups! La page que vous demandez n&apos;existe pas.</h2>
        <NavLink to="/" className={styles.NotFoundLink}>Retourner sur la page d&apos;accueil</NavLink>
        </>
    )
}
export default NotFoundHeroHeaderText;

import { NavLink } from 'react-router-dom';
import styles from './NotFound.module.css';
//mettre Link pour tester les differnces

const NotFound = () => {
    return (
        <div className={styles.container}>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
        <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
        </div>
    );
};
export default NotFound;
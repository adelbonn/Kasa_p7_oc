
import {NavLink } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
 import styles from './NotFound.module.css';
//mettre Link pour tester les differnces

const NotFound = () => {
    return (
        <Layout page='notFound'>
        <div>
        <h1 className={styles.NotFoundH1}>404</h1>
        <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
        <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
        </div>
        </Layout>
    );
};
export default NotFound;
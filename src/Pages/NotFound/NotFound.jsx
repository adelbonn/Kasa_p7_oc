import NotFoundHeroHeader from '../../Components/NotFoundHeader/NotFoundHeroHeader';
import {NavLink } from 'react-router-dom';
import Layout from '../../Components/Layout/Layout';
 import styles from './NotFound.module.css';
 import NotFoundText from '../../Components/NotFoundText/NotFoundText';
//mettre Link pour tester les differnces

const NotFound = () => {
    return (
        <Layout page='notFound'>
       
        {/* <h1 className={styles.NotFoundH1}>404</h1> */}
        <NotFoundHeroHeader />
        <NotFoundText />
        </Layout>
    );
};
export default NotFound;
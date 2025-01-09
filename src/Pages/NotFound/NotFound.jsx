import NotFoundHeroHeader from '../../Components/NotFoundHeader/NotFoundHeroHeader';

 import styles from './NotFound.module.css';
 import NotFoundText from '../../Components/NotFoundText/NotFoundText';


const NotFound = () => {
    return (
      <div className={styles.notFoundContainer}>      
        <NotFoundHeroHeader />
        <NotFoundText />
        </div>
    );
};
export default NotFound;
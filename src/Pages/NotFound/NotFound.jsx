import NotFoundHeroHeader from '../../Components/NotFoundHeader/NotFoundHeroHeader';

//  import styles from './NotFound.module.css';
 import NotFoundText from '../../Components/NotFoundText/NotFoundText';
//mettre Link pour tester les differnces

const NotFound = () => {
    return (
      <>  
        {/* <h1 className={styles.NotFoundH1}>404</h1> */}
        <NotFoundHeroHeader />
        <NotFoundText />
        </>
    );
};
export default NotFound;
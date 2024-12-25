
import styles from './Home.module.css';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const Home = () => {
    return (
        <>
        <NavBar />
        <div className={styles.container}>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <Footer />
        </>
    );
}

export default Home;
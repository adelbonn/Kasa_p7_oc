import styles from '../Layout/Layout.module.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeroHeader from '../HeroHeader/HeroHeader';
import heroImageHome from '../../assets/img/HeroImgHome.png';
import heroImageAbout from '../../assets/img/HeroImgAbout.png';

const Layout = ({children, page}) => {

let heroContent;

switch(page){
    case 'home':
        heroContent = <HeroHeader image={heroImageHome} title="Chez vous, partout et ailleurs" />;
    break;
    case 'about':
        heroContent = <HeroHeader image={heroImageAbout} />;
        break;
    // case 'notFound':
    //     heroContent = <HeroHeader title='404'/>;
    //     break;
        default:
        heroContent = null;
};

    return (
        <div className={styles.layout}>
            <Header>{heroContent}</Header> 
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    page: PropTypes.string.isRequired,
};
export default Layout;

//revoir isRequired pour s'assurer de ne pas le mette trop souvent
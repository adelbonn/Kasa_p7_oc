import styles from '../Layout/Layout.module.css';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeroHeader from '../HeroHeader/HeroHeader';
import heroImageHome from '../../assets/img/HeroImgHome.png';
import heroImageAbout from '../../assets/img/HeroImgAbout.png';

const Layout = ({children, page}) => {

let heroContent;
let layoutGap;
let mainClass;

switch(page){
    case 'home':
        heroContent = <HeroHeader image={heroImageHome} title="Chez vous, partout et ailleurs" />;
        layoutGap = styles.layoutHome;
        mainClass = styles.mainHome;
    break;
    case 'about':
        heroContent = <HeroHeader image={heroImageAbout} />;
        layoutGap = styles.layoutAbout;
        mainClass = styles.mainAbout;
        break;
    case 'notFound':
        // heroContent = <HeroHeader title='404'/>;
        layoutGap = styles.layoutNotFound;   
        mainClass = styles.mainNotFound;
        break;
        case 'PropertyDetails':
            layoutGap = styles.layoutPropertyDetails;
            mainClass = styles.mainPropertyDetails;
            break;
        default:
        heroContent = null;
};

    return (
        <div className={`${styles.layout} ${layoutGap} ${mainClass}`}>
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

import GalleryContainer from '../../Components/GalleryContainer/GalleryContainer';
import Layout from '../../Components/Layout/Layout';
// import HeroHeader from '../../Components/HeroHeader/HeroHeader';
// import heroImage from '../../assets/img/HeroImgHome.png';
// import Header from '../../Components/Header/Header';
import Gallery from '../../Components/Gallery/Gallery';

const Home = () => {
    return (
       
     <Layout page='home'>
      {/* <GalleryContainer> */}
      <Gallery />
      {/* </GalleryContainer> */}
        </Layout>
    );
};

export default Home;
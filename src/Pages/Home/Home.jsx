
import Layout from '../../Components/Layout/Layout';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import heroImage from '../../assets/img/HeroImgHome.png';



const Home = () => {
    return (
        <>
     <Layout>
        <HeroHeader image={heroImage} title="Chez vous, partout et ailleurs" />
        
        </Layout>
        </>
    );
}

export default Home;

import Gallery from '../../Components/Gallery/Gallery';
import {useEffect, useState } from 'react';
import data from '../../Data/DataLogements.json';
import Card from '../../Components/Card/Card';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import image from '../../assets/img/HeroImgHome.png';

const Home = () => {

    const [logements, setLogements] = useState([]); 
 
    useEffect(() =>{
        setLogements(data);
    }, []);
    
    
    return (     
    <>
    <HeroHeader image={image} title="Chez vous partout, ailleurs" isTitleDisplayed={true} />
        <Gallery>
           {logements.map((logement) => 
              <Card 
                key={logement.id}
                logement={logement} 
              />
           )}
        </Gallery>
     </>
    );
};

export default Home;

import Gallery from '../../Components/Gallery/Gallery';
import {useEffect, useState } from 'react';
import data from '../../Data/DataLogements.json';
import Card from '../../Components/Card/Card';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import HeroHeaderTitle from '../../Components/HeroHeader/HeroHeaderTitleHome/HeroHeaderTitleHome';
import image from '../../assets/img/HeroImgHome.png';

const Home = () => {

    const [logements, setLogements] = useState([]);  //ici j'initialise mon state logements avec un tableau vide, j'utilise useState pour chargé les données de mon fichier json, et donc setLogement() va me permettre de mettre a jour mon state logements avec les données de mon fichier json
 
    useEffect(() =>{
        setLogements(data);
    }, []);
    // j'utilise useEffect, pour chargé les données quand le composant card est monté, et donc je passe un tableau vide en second paramètre pour que cela ne s'execute qu'une seule fois après le premier rendu du composant card
    
    return (
       
    <>
    <HeroHeader image={image} title={<HeroHeaderTitle />} />
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
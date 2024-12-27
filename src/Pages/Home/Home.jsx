
import Layout from '../../Components/Layout/Layout';
import Gallery from '../../Components/Gallery/Gallery';
import {useEffect, useState } from 'react';
import data from '../../Data/DataLogements.json';
import Card from '../../Components/Card/Card';
const Home = () => {

    const [logements, setLogements] = useState([]);  //ici j'initialise mon state logements avec un tableau vide, j'utilise useState pour chargé ls données de mon fichier json, et donc setLogement() va me permettre de mettre a jour mon state logements avec les données de mon fichier json
 
    useEffect(() =>{
        setLogements(data);
    }, []);
    // j'utilise useEffect pour effectué les effets de bords, je l utilise pour chargé les données quand le composant card est monté, et donc je passe un tableau vide en second paramètre pour que cela ne s'execute qu'une seule fois après le premier rendu du composant card
    
    return (
       
     <Layout page='home'>
        <Gallery>
           {logements.map((logement) => 
        <Card 
         key={logement.id}
         logement={logement} 
         />
         )}
        </Gallery>
    </Layout>
    );
};

export default Home;
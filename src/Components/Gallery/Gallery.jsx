// import Card from '../Card/Card';
import styles from './Gallery.module.css';
// import data from '../../Data/DataLogements.json';
// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// const Gallery = () => {
//     const [logements, setLogements] = useState([]);  //ici j'initialise mon state logements avec un tableau vide, j'utilise useState pour chargé ls données de mon fichier json, et donc setLogement va me permettre de mettre a jour mon state logements avec les données de mon fichier json

//     useEffect(() => {
//         setLogements(data);
//     }, []);
// // j'utilise useEffect pour effectué les effets de bords, je l utilise pour chargé les données quand le composant card est monté, et donc je passe un tableau vide en second paramètre pour que cela ne s'execute qu'une seule fois après le premier rendu du composant card
//     // j'utilise donc useState pour initialiser mon state logements avec un tableau vide, et useEffect pour chargé les données de mon fichier json, et donc setLogement va me permettre de mettre a jour mon state logements avec les données de mon fichier json
// return (
//         <article className={styles.gallery}>
//         {logements.map((logement) => (
//             <Card
//                 key={logement.id}
//                 logement={logement}
             
//             />
//         ))}
//         </article>
//     );
// };
// export default Gallery;

const Gallery = ({children}) => {
    return (
        <article className={styles.gallery}>
            {children}           
        </article>
    );
};

Gallery.propTypes = {
children: PropTypes.node.isRequired,
}
export default Gallery
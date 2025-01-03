import { useParams, Navigate } from 'react-router-dom';
import DataLogements from '../../Data/DataLogements.json';
import Slider from '../../Components/Slider/Slider';
// import Collapse from '../../Components/Collapse/Collapse';
import styles  from './PropertyDetails.module.css';

const PropertyDetails = () => {

    const { id } = useParams();
    const property = DataLogements.find((item) => item.id ===id);
console.log('propertyId', id);
console.log('property data', property);


    if(!property) {
        return <Navigate to="/not-found" />;
    }

    return (
      
            <div className={styles.propertyDetails}>
               <Slider pictures={property.pictures}/>
                {/* <h1>{property.title}</h1>
                <p>{property.description}</p> */}


                {/* <Slider pictures={property.pictures}/> */}
               {/* h1(title),
                P(description), 
                Tag(tags), 
                Host(host: name, picture),
                stars (rating) 
                collapse('equipement) */}
            </div>
    
    )
};

export default PropertyDetails;


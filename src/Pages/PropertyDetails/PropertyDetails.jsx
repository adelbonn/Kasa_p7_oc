import { useParams, Navigate } from 'react-router-dom';
import DataLogements from '../../Data/DataLogements.json';
import Slider from '../../Components/Slider/Slider';
import Collapse from '../../Components/Collapse/Collapse';
import styles  from './PropertyDetails.module.css';

const PropertyDetails = () => {

    const { id } = useParams();
    const property = DataLogements.find((item) => item.id === id);

    if(!property) {
        return <Navigate to="/not-found" />;
    }

    return (
      
            <div className={styles.propertyDetails}>
               <Slider pictures={property.pictures}/>
                 <div className={styles.infoContainer}>
                     <div className={styles.titleLocation}>
                       <h1>{property.title}</h1>
                       <p>{property.location}</p>
                     </div>

                    <div className={styles.host}>
                        <p>{property.host.name}</p>
                        <img src={property.host.picture} alt={property.host.name} className={styles.hostImage}/>
                    </div>
                  </div>

            
             <div className={styles.tagsStars}>
                <div className={styles.tags}>
                    {property.tags.map((tag, index) => {
                        <span key={index} className={styles.tag}>{tag}</span>
                    })}            
                </div>

                <div className={styles.ratings}>
                  {/* {Array.from({ length: property.rating }).map((_, index) => (
                        <span key={index} className={styles.star}>⭐️</span>
                    ))} */}
                        {[...Array(5)].map((_, index) => (
                        <span key={index} className={index < property.rating ? styles.starFilled : styles.starEmpty}>⭐️</span>
                    ))}
                   
                </div>
             </div>
             
            <div className={styles.collapse}>
                <Collapse title="Description"
                    content={<p>{property.description}</p>}>
                </Collapse>
                <Collapse title="Equipements"
                   content={
                        <ul>
                        {property.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                   }>
                </Collapse>
              </div>  
            </div>
    
          
    )
};

export default PropertyDetails;


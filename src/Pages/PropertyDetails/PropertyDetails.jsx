import { useParams, Navigate } from 'react-router-dom';
import DataLogements from '../../Data/DataLogements.json';
import Slider from '../../Components/Slider/Slider';
import Collapse from '../../Components/Collapse/Collapse';
import Host from '../../Components/Host/Host';
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
                   <Host host={property.host} />
                   <div className={styles.ratings}>
                        {[...Array(5)].map((_, index) => (
                        <span key={index} className={index < property.rating ? styles.starFilled : styles.starEmpty}>⭐️</span>
                    ))}
                </div>
                </div>
                  </div>

            
             <div className={styles.tagsStars}>
                <div className={styles.tags}>
                    {property.tags.map((tag, index) => {
                        <span key={index} className={styles.tag}>{tag}</span>
                    })}            
                </div>

                
             </div>
             
            <div className={styles.collapse}>
                <Collapse title="Description"
                    content={<p>{property.description}</p>}>
                </Collapse>
                <Collapse title="Equipements"
                   content={
                    <div>
                        <ul>
                           {property.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                    </div>
                   }>
                </Collapse>
              </div>  
            </div>
    
          
    )
};

export default PropertyDetails;


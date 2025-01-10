import { useParams, Navigate } from "react-router-dom";
import DataLogements from "../../Data/DataLogements.json";
import Slider from "../../Components/Slider/Slider";
import Collapse from "../../Components/Collapse/Collapse";
import Host from "../../Components/Host/Host";
import TitleLocation from "../../Components/TitleLocation/TitleLocation";
import Tag from "../../Components/Tag/Tag";
import styles from "./PropertyDetails.module.css";
import Ratings from "../../Components/Star/Ratings";

const PropertyDetails = () => {
  const { id } = useParams();
  const property = DataLogements.find((item) => item.id === id);

  if (!property) {
    return <Navigate to="/not-found" />;
  }

  return (
    <div className={styles.propertyDetails}>
      <Slider pictures={property.pictures} />

      <div className={styles.infoContainer}>
        <div className={styles.infoTagsContainer}>
          <TitleLocation title={property.title} location={property.location} />
          <Tag tags={property.tags} />
        </div>

        <div className={styles.HostStarsContainer}>
          <Host host={property.host} />
          <div className={styles.ratings}>
            <Ratings rating={property.rating} />
          </div>
        </div>
      </div>
      
      <div className={styles.propertyCollapseContainer}>
        <Collapse
        
          className={styles.propertyCollapse} 
          title="Description"
          content={<p>{property.description}</p>}
        />
        <Collapse
       
          className={styles.propertyCollapse}
          title="Equipements"
          content={
          
              <ul>
                {property.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
           
          }
        />
      </div>
    </div>
  );
};

export default PropertyDetails;

import { useParams, Navigate } from 'react-router-dom';
import data from '../../Data/DataLogements.json';
import Layout from '../../Components/Layout/Layout';
// import Slider from '../../Components/Slider/Slider';
// import Collapse from '../../Components/Collapse/Collapse';
import styles  from './PropertyDetails.module.css';

const PropertyDetails = () => {

    const { id } = useParams();
    const property = data.id.find((item) => item.id ===id);
console.log('propertyId', id);
console.log('property data', property);


    if(!property) {
        return <Navigate to="/not-found" />;
    }

    return (
        <Layout page='propertyDetails'>
            <div className={styles.propertyDetails}>
                {/* <Slider pictures={property.pictures}/> */}
               {/* h1(title), P(description), Tag(tags), Host(host: name, picture),stars (rating) collapse('equipement) */}
            </div>
        </Layout>
    )
};

export default PropertyDetails;



import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import PropertyDetail from '../../Pages/PropertyDetails/PropertyDetails';
import About from '../../Pages/About/About';
import NotFound from '../../Pages/NotFound/NotFound';

const AppRouter = () => {
    return (
    
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
       
    );
}
export default AppRouter;

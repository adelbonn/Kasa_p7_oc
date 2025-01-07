
import { Routes, Route } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import PropertyDetail from '../../Pages/PropertyDetails/PropertyDetails';
import About from '../../Pages/About/About';
import NotFound from '../../Pages/NotFound/NotFound';
import Layout from '../Layout/Layout';
import { element } from 'prop-types';

const routes = [
  { path: "/", element: <Home />},
  { path: "about", element: <About />},
  { path: "property/:id", element: <PropertyDetail />},
  { path: "*", element: <NotFound />}
]

const AppRouter = () => {
    return (
    
            <Routes>
                <Route path="/" element={<Layout />}>
                  {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={route.element} />
                  ))}
                </Route>
            </Routes>
       
    );
};

export default AppRouter;

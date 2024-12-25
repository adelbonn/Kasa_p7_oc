
import  { NavLink } from 'react-router-dom';

const NavBarLink = () => {
    return (
        <nav>
            <NavLink to ="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
        
        </nav>
    )
}
export default NavBarLink;
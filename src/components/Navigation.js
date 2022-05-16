import '../css/nav.css';
import { Link} from 'react-router-dom';
import { useFilter } from '../context/filterContext';
import { useAuth } from '../context/AuthContext';


const Navigation = () => {
    const { dispatch} = useFilter();
    const { initialAuth : { isLoggedIn }} = useAuth();

    return  <nav className="nav-container display-flex primary-clr p-rl-6">
        <Link to='/' className="nav-link font-size-2pt6" onClick={() => dispatch({type: 'CLEAR_ALL'})}>Hotelaza</Link>
        <div className="input-search pos-rltv m-rght-auto">
            <i className="fa-solid fa-magnifying-glass pos-absolute font-size-2pt6"></i>
            <input type="text" placeholder="search" className="nav-input-search"/>
        </div>
        <Link  to='/productlist' className="nav-link-cta">Shop Now</Link>
        <Link to='/login' className="nav-link"><button
                className="btn btn-solid-secondary">{isLoggedIn ? 'Log Out' : 'Log In'}</button></Link>
        <Link to='/wishlist' className="nav-link">
            <i className="fa-regular fa-heart font-size-2pt6"></i>
        </Link>
        <Link to='/cart' className="nav-link">
            <i className="fas fa-shopping-cart font-size-2pt6"></i>
        </Link>
    </nav>

}

export { Navigation }
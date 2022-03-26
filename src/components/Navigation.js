import '../css/nav.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return  <nav class="nav-container display-flex primary-clr p-rl-6">
        <Link to='/' class="nav-link font-size-2pt6">Hotelaza</Link>
        <div class="input-search pos-rltv m-rght-auto">
            <i class="fa-solid fa-magnifying-glass pos-absolute font-size-2pt6"></i>
            <input type="text" placeholder="search" class="nav-input-search"/>
        </div>
        <Link to='/productlist' class="nav-link-cta">Shop Now</Link>
        <Link to='/login' class="nav-link"><button
                class="btn btn-solid-secondary">Login</button></Link>
        <Link to='/wishlist' class="nav-link">
            <i class="fa-regular fa-heart font-size-2pt6"></i>
        </Link>
        <Link to='/cart' class="nav-link">
            <i class="fas fa-shopping-cart font-size-2pt6"></i>
        </Link>
    </nav>

}

export { Navigation }
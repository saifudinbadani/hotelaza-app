import '../css/wishlist.css';
import { WishlistProductCard } from '../components/Wishlist/WishlistProductCard';
import { Navigation } from '../components/Navigation';

const Wishlist = () => {
    return <div className='home-page-body bg-clr'>
        <Navigation />
    <div className="wishlist-container disp-grid p-rl-6">
        <WishlistProductCard />
    </div>
    </div>
}

export {Wishlist}
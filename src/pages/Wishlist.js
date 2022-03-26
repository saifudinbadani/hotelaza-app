import '../css/wishlist.css';
import { WishlistProductCard } from '../components/Wishlist/WishlistProductCard';
import { Navigation } from '../components/Navigation';

const Wishlist = () => {
    return <div className='home-page-body bg-clr'>
        <Navigation />
    <div class="wishlist-container disp-grid p-rl-6">
        <WishlistProductCard />
        <WishlistProductCard />
        <WishlistProductCard />
        <WishlistProductCard />
        <WishlistProductCard />
    </div>
    </div>
}

export {Wishlist}
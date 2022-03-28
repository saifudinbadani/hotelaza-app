import '../css/cart.css';
import { CartSummary } from '../components/Cart/CartSummary';
import {CartProductCard} from '../components/Cart/CartProductCard';
import { Navigation } from '../components/Navigation';
import { useCart } from '../context/CartContext';



const Cart = () => {
    const { cartState } = useCart();
    return  <div className='home-page-body bg-clr'>
    <Navigation />
    <main className="cart-container">
    <div className="my-cart heading-3 txt-align-cntr">
        My Cart (<span className="cart-items-qty heading-3">{cartState.totalQty}</span>)
    </div>
    <div className="cart-management display-flex justify-content-spce-arnd">
     <div className='display-flex flex-wrap'>    
    <CartProductCard />
    </div> 
    <CartSummary />
    </div>
    </main>  
    </div>  
}

export { Cart }
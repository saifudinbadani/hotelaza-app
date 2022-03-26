import '../css/cart.css';
import { CartSummary } from '../components/Cart/CartSummary';
import {CartProductCard} from '../components/Cart/CartProductCard';
import { Navigation } from '../components/Navigation';
 
const Cart = () => {
    return  <div className='home-page-body bg-clr'>
    <Navigation />
    <main class="cart-container">
    <div class="my-cart heading-3 txt-align-cntr">
        My Cart (<span class="cart-items-qty heading-3">2</span>)
    </div>
    <div class="cart-management display-flex justify-content-spce-arnd">
    <CartProductCard />
    <CartSummary />
    </div>
    </main>  
    </div>  
}

export { Cart }
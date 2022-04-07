import '../../css/cart.css';
import { useCart } from '../../context/CartContext';

const CartSummary = () => {
    const { cartState } = useCart();
    const { cart } = cartState;

    const totalPrice= cart.reduce((acc,curr)=>acc+curr.price*curr.itemQty,0)
    const totalQty = cart.reduce((acc, curr) => acc + curr.itemQty, 0)

    

    return <div className="cart-details-card">
    <div className="card display-flex-c  p-rl-1 width-40">
        <div className="card-content display-flex-c">
            <h3 className="card-title heading-3 m-t-1">Price Details</h3>
            <hr/>
            <div className="cart-items-details">
                <div className="display-flex justify-content-spce-btwn m-t-1">
                    <p className="heading-4"> Price (<span className="cart-items-qty heading-4">{totalQty} </span>items)</p>
                    <p className="heading-4">$<span className="cart-items-price heading-4">{totalPrice}</span></p>
                </div>
        
                <div className="display-flex justify-content-spce-btwn m-t-1">
                    <p className="heading-4"> Delivery charges</p>
                    <p className="heading-4">$<span className="cart-items-delivery heading-4">0</span></p>
                </div>
                <hr/>
                <div className="display-flex justify-content-spce-btwn m-t-1">
                    <p className="heading-4 fw-bold"> Total Amount</p>
                    <p className="heading-4">$<span className="cart-items-total-amnt heading-4">{cartState.totalPrice}</span></p>
                </div>
            </div>
          
            <div className="card-footer">
                <button className="card-btn btn btn-solid-primary width-100pcnt">Place Order</button>
            </div>
        </div>
    </div>
</div>
}

export { CartSummary }
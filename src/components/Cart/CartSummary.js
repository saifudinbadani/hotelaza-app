import '../../css/cart.css';

const CartSummary = () => {
    return <div class="cart-details-card">
    <div class="card display-flex-c  p-rl-1 width-40">
        <div class="card-content display-flex-c">
            <h3 class="card-title heading-3 m-t-1">Price Details</h3>
            <hr/>
            <div class="cart-items-details">
                <div class="display-flex justify-content-spce-btwn m-t-1">
                    <p class="heading-4"> Price (<span class="cart-items-qty heading-4">2 </span>items)</p>
                    <p class="heading-4">$<span class="cart-items-price heading-4">260</span></p>
                </div>
        
                <div class="display-flex justify-content-spce-btwn m-t-1">
                    <p class="heading-4"> Delivery charges</p>
                    <p class="heading-4">$<span class="cart-items-delivery heading-4">0</span></p>
                </div>
                <hr/>
                <div class="display-flex justify-content-spce-btwn m-t-1">
                    <p class="heading-4 fw-bold"> Total Amount</p>
                    <p class="heading-4">$<span class="cart-items-total-amnt heading-4">260</span></p>
                </div>
            </div>
          
            <div class="card-footer">
                <button class="card-btn btn btn-solid-primary width-100pcnt">Place Order</button>
            </div>
        </div>
    </div>
</div>
}

export { CartSummary }
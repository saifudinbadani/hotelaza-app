import '../../css/product-listing.css';
import diningHomePage from '../../assets/dining-homepage.jpg';

const Product = () => {
    return <main class="products-listing-container p-rl-6">
    <h4 class="heading-4 m-t-1">
        Showing Products 
        <span class="font-size-1pt4 clr-text-on-white"> ( showing <span class="products-card-count font-size-1pt4 clr-text-on-white"> 20 </span>
            products )</span>
    </h4>
    <div class="products-card-container display-flex">
        <div class="card-h display-flex">
            <div class="card-img-h">
                <img src={diningHomePage} alt="Dining"/>
            </div>
            <div class="card-content-h display-flex-c">
                <h3 class="card-title heading-3 fw-regular">Atrium Buffet</h3>
                <small class="card-author">by Hotelaza</small>
                <p class="text-black heading-4 fw-bold">$600 <s class="card-text heading-4 fw-regular">$850</s>
                </p>
                <div class="card-footer-h">
                    <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                        Cart</button>
                    <button class="card-btn btn btn-outline-secondary font-size-1pt4 width-100pcnt">Move to
                        Wishlist</button>
                </div>
            </div>
        </div>

        <div class="card-h display-flex">
            <div class="card-img-h">
                <img src={diningHomePage} alt="Dining"/>
            </div>
            <div class="card-content-h display-flex-c">
                <h3 class="card-title heading-3 fw-regular">Atrium Buffet</h3>
                <small class="card-author">by Hotelaza</small>
                <p class="text-black heading-4 fw-bold">$600 <s class="card-text heading-4 fw-regular">$850</s>
                </p>
                <div class="card-footer-h">
                    <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                        Cart</button>
                    <button class="card-btn btn btn-outline-secondary font-size-1pt4 width-100pcnt">Move to
                        Wishlist</button>
                </div>
            </div>
        </div>

        <div class="card-h display-flex">
            <div class="card-img-h">
                <img src={diningHomePage} alt="Dining"/>
            </div>
            <div class="card-content-h display-flex-c">
                <h3 class="card-title heading-3 fw-regular">Atrium Buffet</h3>
                <small class="card-author">by Hotelaza</small>
                <p class="text-black heading-4 fw-bold">$600 <s class="card-text heading-4 fw-regular">$850</s>
                </p>
                <div class="card-footer-h">
                    <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                        Cart</button>
                    <button class="card-btn btn btn-outline-secondary font-size-1pt4 width-100pcnt">Move to
                        Wishlist</button>
                </div>
            </div>
        </div>

        <div class="card-h display-flex">
            <div class="card-img-h">
                <img src={diningHomePage} alt="Dining"/>
            </div>
            <div class="card-content-h display-flex-c">
                <h3 class="card-title heading-3 fw-regular">Atrium Buffet</h3>
                <small class="card-author">by Hotelaza</small>
                <p class="text-black heading-4 fw-bold">$600 <s class="card-text heading-4 fw-regular">$850</s>
                </p>
                <div class="card-footer-h">
                    <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                        Cart</button>
                    <button class="card-btn btn btn-outline-secondary font-size-1pt4 width-100pcnt">Move to
                        Wishlist</button>
                </div>
            </div>
        </div>

        <div class="card-h display-flex">
            <div class="card-img-h">
                <img src={diningHomePage} alt="Dining"/>
            </div>
            <div class="card-content-h display-flex-c">
                <h3 class="card-title heading-3 fw-regular">Atrium Buffet</h3>
                <small class="card-author">by Hotelaza</small>
                <p class="text-black heading-4 fw-bold">$600 <s class="card-text heading-4 fw-regular">$850</s>
                </p>
                <div class="card-footer-h">
                    <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                        Cart</button>
                    <button class="card-btn btn btn-outline-secondary font-size-1pt4 width-100pcnt">Move to
                        Wishlist</button>
                </div>
            </div>
        </div>

        <div class="card-h display-flex">
            <div class="card-img-h">
                <img src={diningHomePage} alt="Dining"/>
            </div>
            <div class="card-content-h display-flex-c">
                <h3 class="card-title heading-3 fw-regular">Atrium Buffet</h3>
                <small class="card-author">by Hotelaza</small>
                <p class="text-black heading-4 fw-bold">$600 <s class="card-text heading-4 fw-regular">$850</s>
                </p>
                <div class="card-footer-h">
                    <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                        Cart</button>
                    <button class="card-btn btn btn-outline-secondary font-size-1pt4 width-100pcnt">Move to
                        Wishlist</button>
                </div>
            </div>
        </div>
    </div>
</main>
}

export { Product }
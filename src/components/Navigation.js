import '../css/nav.css';

const Navigation = () => {
    return  <nav class="nav-container display-flex primary-clr p-rl-6">
        <a href="./index.html" class="nav-link font-size-2pt6">
            Hotelaza
        </a>
        <div class="input-search pos-rltv m-rght-auto">
            <i class="fa-solid fa-magnifying-glass pos-absolute font-size-2pt6"></i>
            <input type="text" placeholder="search" class="nav-input-search"/>
        </div>
        <a href="./product-listing/product-listing.html" class="nav-link-cta">Shop Now</a>
        <a href="./login-signup/login.html" class="nav-link"><button
                class="btn btn-solid-secondary">Login</button></a>
        <a href="./wishlist/wishlist.html" class="nav-link">
            <i class="fa-regular fa-heart font-size-2pt6"></i>
        </a>
        <a href="./cart/cart.html" class="nav-link">
            <i class="fas fa-shopping-cart font-size-2pt6"></i>
        </a>
    </nav>

}

export { Navigation }
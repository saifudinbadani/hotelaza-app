import '../../css/product-listing.css';

import { products } from '../../backend/db/products';

const Product = () => {
    return <main class="products-listing-container p-rl-6">
    <h4 class="heading-4 m-t-1">
        Showing Products 
        <span class="font-size-1pt4 clr-text-on-white"> ( showing <span class="products-card-count font-size-1pt4 clr-text-on-white"> 20 </span>
            products )</span>
    </h4>
    <div class="products-card-container display-flex">
        {products.map(item => {
            return  <div class="card-h display-flex">
                       <div class="card-img-h pos-rltv">
                             <img src={item.img} alt="Dining"/>
                             <i class="card-dismiss fa-regular fa-heart"></i>
                             <div class="badge-container pos-absolute">
                                 <span class="badge-primary">{item.starRating} <i class="fa-solid fa-star"></i>
                                 </span>
                             </div>
                         </div>
                         <div class="card-content-h display-flex-c">
                            <h3 class="card-title heading-4 fw-regular">{item.title}</h3>
                             <small class="card-author heading-5">{item.description}</small>
                             <p class="text-black heading-4 fw-bold">${item.price}</p>
                            <div class="card-footer-h">
                                 <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                                    Cart</button>
                             </div>
                         </div>
                     </div>
        })}
    </div>
</main>
}

export { Product }


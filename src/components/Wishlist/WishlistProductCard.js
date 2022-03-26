import '../../css/wishlist.css';
import categoryRoom from '../../assets/categories/room-cat.jpg';

const WishlistProductCard = () => {
    return  <div class="card-h display-flex">
    <div class="card-img-h pos-rltv">
          <img src={categoryRoom} alt="Dining"/>
          <i class="card-dismiss wishlist-selected fas fa-heart"></i>
          <div class="badge-container pos-absolute">
              <span class="badge-primary">4 <i class="fa-solid fa-star"></i>
              </span>
          </div>
      </div>
      <div class="card-content-h display-flex-c">
         <h3 class="card-title heading-4 fw-regular">Title</h3>
          <small class="card-author heading-5">description</small>
          <p class="text-black heading-4 fw-bold">$421</p>
         <div class="card-footer-h">
              <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                 Cart</button>
          </div>
      </div>
  </div>
}

export { WishlistProductCard }
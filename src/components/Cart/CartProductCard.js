import '../../css/cart.css';
import categoryRoom from '../../assets/categories/room-cat.jpg';

const CartProductCard = () => {
    return <div class="card-h display-flex">
    <div class="card-img-h pos-rltv">
          <img src={categoryRoom} alt="Dining"/>
          <i class="card-dismiss fa-regular fa-heart"></i>
          <div class="badge-container pos-absolute">
              <span class="badge-primary">4 <i class="fa-solid fa-star"></i>
              </span>
          </div>
      </div>
      <div class="card-content-h display-flex-c">
         <h3 class="card-title heading-4 fw-regular">Title</h3>
          <small class="card-author heading-5">description</small>
          <p class="text-black heading-4 fw-bold">$123</p>
         <div class="card-footer-h">
              <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Remove from Cart</button>
          </div>
      </div>
  </div>
}

export {CartProductCard}
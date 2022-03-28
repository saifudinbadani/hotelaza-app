import '../../css/cart.css';

import { useCart } from '../../context/CartContext';


const CartProductCard = () => {
   const { cartState, cartDispatch } = useCart();
   const { cart } = cartState;
   
     { return cart.map((item) => 
         <div class="card-h display-flex">
        <div class="card-img-h pos-rltv">
              <img src={item.img} alt="Dining"/>
              <i class="card-dismiss fa-regular fa-heart"></i>
              <div class="badge-container pos-absolute">
                  <span class="badge-primary">{item.starRating}<i class="fa-solid fa-star"></i>
                  </span>
              </div>
          </div>
          <div class="card-content-h display-flex-c">
             <h3 class="card-title heading-4 fw-regular">{item.title}</h3>
              <small class="card-author heading-5">{item.description}</small>
              <p class="text-black heading-4 fw-bold">${item.price}</p>
             <div class="card-footer-h">
                  <button class="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt" onClick={() => cartDispatch({type: 'REMOVE_FROM_CART', payload: item})}>Remove from Cart</button>
              </div>
          </div>
      </div>
    )}


   

 
}

export {CartProductCard}
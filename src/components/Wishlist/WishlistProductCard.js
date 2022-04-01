import '../../css/wishlist.css';
import { useCart } from '../../context/CartContext';

const WishlistProductCard = () => {
    const { cartDispatch, cartState } = useCart();
    const { wishlist } = cartState;
    {return wishlist.map((item) => 
     <div className="card-h display-flex">
    <div className="card-img-h pos-rltv">
          <img src={item.img} alt="Dining"/>
          <i className="card-dismiss wishlist-selected fas fa-heart" onClick={() => cartDispatch({type: 'REMOVE_FROM_WISHLIST', payload: item})}></i>
          <div className="badge-container pos-absolute">
              <span className="badge-primary">{item.starRating} <i className="fa-solid fa-star"></i>
              </span>
          </div>
      </div>
      <div className="card-content-h display-flex-c">
         <h3 className="card-title heading-4 fw-regular">{item.title}</h3>
          <small className="card-author heading-5">{item.description}</small>
          <p className="text-black heading-4 fw-bold">${item.price}</p>
         <div className="card-footer-h">
              <button className="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt" onClick={() => cartDispatch({type: 'ADD_TO_CART', payload: item})}>Add to
                 Cart</button>
          </div>
      </div>
  </div>)}
}

export { WishlistProductCard }
import '../../css/wishlist.css';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { removeFromWishlistApiCall } from '../../utils/wishlistFunctions';
import { addToCartApiCall } from '../../utils/cartFunctions';

const WishlistProductCard = () => {
    const { initialAuth : { token }} = useAuth();
    const { cartDispatch, cartState } = useCart();
    const { wishlist } = cartState;
    const removeFromWishlist = async (id) => {
        const response = await removeFromWishlistApiCall(id, token)
        cartDispatch({type: 'HANDLE_WISHLIST', payload: response})
    }
    
    const addToCartFn = async (item) => {
        const response = await addToCartApiCall(item, token)
        if(response){
            cartDispatch({type: 'HANDLE_CART', payload: response })}    
        const wishListResponse = await removeFromWishlistApiCall(item._id, token)

        if(wishListResponse){
            cartDispatch({type: 'HANDLE_WISHLIST', payload: wishListResponse})
        } 
    }
    return wishlist.map((item) => 
     <div className="card-h display-flex" key={item._id}>
    <div className="card-img-h pos-rltv">
          <img src={item.img} alt="Dining"/>
          <i className="card-dismiss wishlist-selected fas fa-heart" onClick={() => removeFromWishlist(item._id)}></i>
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
              <button className="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt" onClick={() => addToCartFn(item)}>Move to Cart</button>
          </div>
      </div>
  </div>)}


export { WishlistProductCard }
import '../../css/cart.css';
import { useCart } from '../../context/CartContext';
import { removeFromCartApiCall } from '../../utils/cartFunctions';
import { useAuth } from '../../context/AuthContext';


const CartProductCard = () => {
   const { cartState, cartDispatch } = useCart();
   const { cart } = cartState;
   const { initialAuth : { token }} = useAuth();
   const removeFromCart = async (id) => {
        const response = await removeFromCartApiCall(id, token)
        cartDispatch({type: 'HANDLE_CART', payload: response})
   }


     { return cart.map((item) => 
         <div className="card-h display-flex" key={item._id}>
        <div className="card-img-h pos-rltv">
              <img src={item.img} alt="Dining"/>
              <i className="card-dismiss fa-regular fa-heart" onClick={() => cartDispatch({type: "ADD_TO_WISHLIST", payload: item})}></i>
              <div className="badge-container pos-absolute">
                  <span className="badge-primary">{item.starRating}<i className="fa-solid fa-star"></i>
                  </span>
              </div>
          </div>
          <div className="card-content-h display-flex-c">
             <h3 className="card-title heading-4 fw-regular">{item.title}</h3>
              <small className="card-author heading-5">{item.description}</small>
              <p className="text-black heading-4 fw-bold">${item.price}</p>
              <div className='card-qty'>Quantity: <button className='qty-btn' onClick={() => cartDispatch({type: 'INCREMENT_CART', payload: item})} >+</button><input type='text' className='qty-input' value={item.itemQty} maxLength={2} max={10} size={1} readOnly/><button className='qty-btn' onClick={() => cartDispatch({type: 'DECREMENT_CART', payload: item})} >-</button></div>
             <div className="card-footer-h">
                  <button className="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt" onClick={() => removeFromCart(item._id)}>Remove from Cart</button>
              </div>
          </div>
      </div>
    )} 
}

export {CartProductCard}
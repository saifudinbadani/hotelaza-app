import '../../css/product-listing.css';
import { useFilter } from '../../context/filterContext';
import { useCart } from '../../context/CartContext';
import { addToCartApiCall } from '../../utils/cartFunctions';
import { useAuth } from '../../context/AuthContext';

const Product = () => {
    const { cartState: { products, cart },cartDispatch } = useCart();
    const { initialAuth : { token }} = useAuth();
    const {state, categoryFn, ratingFilterFn, sortingFn, priceRangeFn } = useFilter();

    const priceRangeFilteredData = priceRangeFn(state, products);
    const categoryFilteredData = categoryFn(state, priceRangeFilteredData);
    const ratingFilteredData = ratingFilterFn(state, categoryFilteredData)
    const sortedData = sortingFn(state, ratingFilteredData)
    
    const addToCartFn = async (item) => {

        const response = await addToCartApiCall(item, token)

        if(response){
            console.log(cart)
            cartDispatch({type: 'ADD_TO_CART', payload: response })
        }
    }
    return <main className="products-listing-container p-rl-6">
    <h4 className="heading-4 m-t-1">
        Showing Products 
        <span className="font-size-1pt4 clr-text-on-white"> ( showing <span className="products-card-count font-size-1pt4 clr-text-on-white"> {sortedData.length} </span>
            products )</span>
    </h4>
    <div className="products-card-container display-flex">
        

        {sortedData.map(item => {
            return  <div className="card-h display-flex" key={item._id}>
                       <div className="card-img-h pos-rltv">
                             <img src={item.img} alt="Dining"/>
                             <i className="card-dismiss fa-regular fa-heart" onClick={() => cartDispatch({type: 'ADD_TO_WISHLIST', payload: item})}></i>
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
                                {cart.find( i => i._id === item._id) ? <button className="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Go to Cart</button> :  <button className="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt" onClick={() => addToCartFn(item)}>Add to
                                    Cart</button>}
                                 
                             </div>
                         </div>
                     </div>
        })}
    </div>
</main>
}

export { Product }


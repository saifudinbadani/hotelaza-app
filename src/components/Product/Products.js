import '../../css/product-listing.css';
import { products } from '../../backend/db/products';
import { useFilter } from '../../context/filterContext';
import { useCart } from '../../context/CartContext';

const Product = () => {
    
    const { cartDispatch } = useCart();

    const {state, categoryFn, ratingFilterFn, sortingFn} = useFilter();

    const categoryFilteredData = categoryFn(state, products);
    const ratingFilteredData = ratingFilterFn(state, categoryFilteredData)
    const sortedData = sortingFn(state, ratingFilteredData)
    

    return <main className="products-listing-container p-rl-6">
    <h4 className="heading-4 m-t-1">
        Showing Products 
        <span className="font-size-1pt4 clr-text-on-white"> ( showing <span className="products-card-count font-size-1pt4 clr-text-on-white"> 20 </span>
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
                                 <button className="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt" onClick={() => cartDispatch({type: 'ADD_TO_CART', payload: item })}>Add to
                                    Cart</button>
                             </div>
                         </div>
                     </div>
        })}
    </div>
</main>
}

export { Product }


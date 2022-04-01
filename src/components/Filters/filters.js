import '../../css/product-listing.css';
import { useFilter } from '../../context/filterContext';


const Filter = () => {
   const { state, dispatch } = useFilter();
   const{
    dining,
    holiday,
    rooms,
    spa,
    sortBy,
    starRating,
    priceRange
} =  state 
    
console.log({starRating})

    return  <aside className="side-container p-rl-1">
    <div className="filter-link display-flex justify-content-spce-btwn align-items-cntr m-t-1">
        <span className="heading-4">Filters</span>
        <button className="btn-clear heading-4" onClick={() => dispatch({type: "CLEAR_ALL"})}>clear</button>
    </div>
    <hr/>
    <p className="heading-4 fw-bold m-t-1">Price</p>
    <div className="filter-price-range display-flex-c justify-content-spce-btwn align-items-flx-start m-t-1">
        <p className="price-range display-flex width-100pcnt justify-content-spce-btwn">
            <span className="heading-5 font-size-1pt4">$100</span>
            <span className="heading-5 font-size-1pt4">$5000</span>
        </p>
        <input className="price-range-input width-100pcnt" type="range" list="price-range"  min="100"
            max="5000"  defaultValue={priceRange} onChange={(event) => dispatch({type: 'PRICE_RANGE', payload: event.target.value})}/>
        <datalist id="price-range">
            <option value="100" label="100">$100</option>
            <option value="5000" label="5000">$5000</option>
        </datalist>
    </div>
   
    <p className="heading-4 fw-bold m-t-1">Category</p>

    <div className="m-t-1">
        <input type="checkbox" id="dining" name="dining" checked={dining} onChange={() => dispatch({type: "DINING"})}/>
        <label htmlFor="dining" className="font-size-1pt4 p-rl-1">Dining</label>
    </div>

    <div className="m-t-1">
        <input type="checkbox" id="holiday" name="holiday" checked={holiday} onChange={() => dispatch({type: "HOLIDAY"})}/>
        <label htmlFor="holiday" className="font-size-1pt4 p-rl-1">Holiday</label>
    </div>

    <div className="m-t-1">
        <input type="checkbox" id="rooms" name="rooms" checked={rooms} onChange={() => dispatch({type: "ROOMS"})}/>
        <label htmlFor="rooms" className="font-size-1pt4 p-rl-1">Rooms</label>
    </div>

    <div className="m-t-1">
        <input type="checkbox" id="spa" name="spa" checked={spa} onChange={() => dispatch({type: "SPA"})}/>
        <label htmlFor="spa" className="font-size-1pt4 p-rl-1">Spa</label>
    </div>
   
    <p className="heading-4 fw-bold m-t-1">Rating</p>
    <form className="m-t-1 display-flex-c">
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars4" name="rating" checked={starRating === 'FOURSTARS'} value="4 stars" onChange={() => dispatch({type: "FOURSTARS"})}/>
            <label htmlFor="ratingStars4" className="font-size-1pt4 p-rl-1">4 Stars & above</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars3" name="rating" value="3 stars" checked={starRating === 'THREESTARS'}onChange={() => dispatch({type: "THREESTARS"})}/>
            <label htmlFor="ratingStars3" className="font-size-1pt4 p-rl-1">3 Stars & above</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars2" name="rating" value="2 stars" checked={starRating === 'TWOSTARS'} onChange={() => dispatch({type: "TWOSTARS"})}/>
            <label htmlFor="ratingStars2" className="font-size-1pt4 p-rl-1">2 Stars & above</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars1" name="rating" value="1 star" checked={starRating === 'ONESTAR'} onChange={() => dispatch({type: "ONESTAR"})}/>
            <label htmlFor="ratingStars1" className="font-size-1pt4 p-rl-1">1 Star & above</label>
        </div>
    </form>

   
    <p className="heading-4 fw-bold m-t-1">Sort by</p>
    <form className="m-t-1 display-flex-c">
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="priceLtoH" name="sorting" value="priceLtoH" checked={sortBy === 'priceLowToHigh'} onChange={() => dispatch({type: "priceLowToHigh"})}/>
            <label htmlFor="priceLtoH" className="font-size-1pt4 p-rl-1">Price - Low to High</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="priceHtoL" name="sorting" value="priceHtoL" checked={sortBy === 'priceHighToLow'} onChange={() => dispatch({type: "priceHighToLow"})}/>
            <label htmlFor="priceHtoL" className="font-size-1pt4 p-rl-1">Price - High to Low</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingLtoH" name="sorting" value="ratingLtoH" checked={sortBy === 'ratingLowToHigh'} onChange={() => dispatch({type: "ratingLowToHigh"})}/>
            <label htmlFor="ratingLtoH" className="font-size-1pt4 p-rl-1">Rating - Low to High</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingHtoL" name="sorting" value="ratingHtoL" checked={sortBy === 'ratingHighToLow'} onChange={() => dispatch({type: "ratingHighToLow"})}/>
            <label htmlFor="ratingHtoL" className="font-size-1pt4 p-rl-1">Rating - High to Low</label>
        </div>
    </form>

</aside>
}

export { Filter }
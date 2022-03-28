import '../../css/product-listing.css';
import { Link } from 'react-router-dom';
import { useFilter } from '../../context/filterContext';


const Filter = () => {
   const { dispatch } = useFilter();
    


    return  <aside className="side-container p-rl-1">
    <div className="filter-link display-flex justify-content-spce-btwn align-items-cntr m-t-1">
        <span className="heading-4">Filters</span>
        <Link to="/productlist" className="heading-4">clear</Link>
    </div>
    <hr/>
    <p className="heading-4 fw-bold m-t-1">Price</p>
    <div className="filter-price-range display-flex-c justify-content-spce-btwn align-items-flx-start m-t-1">
        <p className="price-range display-flex width-100pcnt justify-content-spce-btwn">
            <span className="heading-5 font-size-1pt4">$100</span>
            <span className="heading-5 font-size-1pt4">$500</span>
            <span className="heading-5 font-size-1pt4">$1000</span>
        </p>
        <input className="price-range-input width-100pcnt" type="range" list="price-range" step="100" min="100"
            max="1000"/>
        <datalist id="price-range">
            <option value="100" label="100">$100</option>
            <option value="500" label="500">$500</option>
            <option value="1000" label="1000">$1000</option>
        </datalist>
    </div>
   
    <p className="heading-4 fw-bold m-t-1">Category</p>

    <div className="m-t-1">
        <input type="checkbox" id="dining" name="dining" onChange={() => dispatch({type: "DINING"})}/>
        <label htmlFor="dining" className="font-size-1pt4 p-rl-1">Dining</label>
    </div>

    <div className="m-t-1">
        <input type="checkbox" id="holiday" name="holiday" onChange={() => dispatch({type: "HOLIDAY"})}/>
        <label htmlFor="holiday" className="font-size-1pt4 p-rl-1">Holiday</label>
    </div>

    <div className="m-t-1">
        <input type="checkbox" id="rooms" name="rooms" onChange={() => dispatch({type: "ROOMS"})}/>
        <label htmlFor="rooms" className="font-size-1pt4 p-rl-1">Rooms</label>
    </div>

    <div className="m-t-1">
        <input type="checkbox" id="spa" name="spa" onChange={() => dispatch({type: "SPA"})}/>
        <label htmlFor="spa" className="font-size-1pt4 p-rl-1">Spa</label>
    </div>
   
    <p className="heading-4 fw-bold m-t-1">Rating</p>
    <form className="m-t-1 display-flex-c">
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars4" name="rating" value="4 stars" onChange={() => dispatch({type: "FOURSTARS"})}/>
            <label htmlFor="ratingStars4" className="font-size-1pt4 p-rl-1">4 Stars & above</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars3" name="rating" value="3 stars" onChange={() => dispatch({type: "THREESTARS"})}/>
            <label htmlFor="ratingStars3" className="font-size-1pt4 p-rl-1">3 Stars & above</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars2" name="rating" value="2 stars"onChange={() => dispatch({type: "TWOSTARS"})}/>
            <label htmlFor="ratingStars2" className="font-size-1pt4 p-rl-1">2 Stars & above</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingStars1" name="rating" value="1 star" onChange={() => dispatch({type: "ONESTAR"})}/>
            <label htmlFor="ratingStars1" className="font-size-1pt4 p-rl-1">1 Star & above</label>
        </div>
    </form>

   
    <p className="heading-4 fw-bold m-t-1">Sort by</p>
    <form className="m-t-1 display-flex-c">
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="priceLtoH" name="sorting" value="priceLtoH" onChange={() => dispatch({type: "priceLowToHigh"})}/>
            <label htmlFor="priceLtoH" className="font-size-1pt4 p-rl-1">Price - Low to High</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="priceHtoL" name="sorting" value="priceHtoL" onChange={() => dispatch({type: "priceHighToLow"})}/>
            <label htmlFor="priceHtoL" className="font-size-1pt4 p-rl-1">Price - High to Low</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingLtoH" name="sorting" value="ratingLtoH" onChange={() => dispatch({type: "ratingLowToHigh"})}/>
            <label htmlFor="ratingLtoH" className="font-size-1pt4 p-rl-1">Rating - Low to High</label>
        </div>
        <div className="display-flex m-t-1 align-items-cntr">
            <input type="radio" id="ratingHtoL" name="sorting" value="ratingHtoL" onChange={() => dispatch({type: "ratingHighToLow"})}/>
            <label htmlFor="ratingHtoL" className="font-size-1pt4 p-rl-1">Rating - High to Low</label>
        </div>
    </form>

</aside>
}

export { Filter }
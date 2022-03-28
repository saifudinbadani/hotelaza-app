import '../../css/wishlist.css';
import categoryRoom from '../../assets/categories/room-cat.jpg';

const WishlistProductCard = () => {
    return  <div className="card-h display-flex">
    <div className="card-img-h pos-rltv">
          <img src={categoryRoom} alt="Dining"/>
          <i className="card-dismiss wishlist-selected fas fa-heart"></i>
          <div className="badge-container pos-absolute">
              <span className="badge-primary">4 <i className="fa-solid fa-star"></i>
              </span>
          </div>
      </div>
      <div className="card-content-h display-flex-c">
         <h3 className="card-title heading-4 fw-regular">Title</h3>
          <small className="card-author heading-5">description</small>
          <p className="text-black heading-4 fw-bold">$421</p>
         <div className="card-footer-h">
              <button className="card-btn btn btn-solid-primary font-size-1pt4 width-100pcnt">Add to
                 Cart</button>
          </div>
      </div>
  </div>
}

export { WishlistProductCard }
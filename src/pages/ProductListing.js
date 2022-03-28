import '../css/product-listing.css';
import { Navigation } from '../components/Navigation';
import { Filter  } from '../components/Filters/filters';
import { Product } from '../components/Product/Products';

const ProductListing = () => {
    return <div className='home-page-body bg-clr'>
        <Navigation />
        <div className="main-aside-wrapper disp-grid">
            <Filter/>
            <Product />
        </div>
    </div>
}

export { ProductListing }
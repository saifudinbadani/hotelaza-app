import '../../css/home-page.css';
import categoryRoom from '../../assets/categories/room-cat.jpg';
import categoryDining from '../../assets/categories/dining-cat.jpg';
import categoryHoliday from '../../assets/categories/holiday-cat.jpg';
import categorySpa from '../../assets/categories/spa-cat.jpg';


const HomePageCategories = () => {
    return  <div className="homepage-cat p-rl-6 pos-rltv display-flex m-t-8">
    <div className="hp-cat-img pos-rltv">
        <img src={categoryRoom} alt="room" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Rooms</p>
    </div>
    <div className="hp-cat-img pos-rltv">
        <img src={categorySpa} alt="spa" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Spa</p>
    </div>
    <div className="hp-cat-img pos-rltv">
        <img src={categoryHoliday} alt="holiday" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Holiday</p>
    </div>
    <div className="hp-cat-img pos-rltv">
        <img src={categoryDining} alt="dining" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Dining</p>
    </div>
    </div>
}

export { HomePageCategories }
import '../../css/home-page.css';
import categoryRoom from '../../assets/categories/room-cat.jpg';
import categoryDining from '../../assets/categories/dining-cat.jpg';
import categoryHoliday from '../../assets/categories/holiday-cat.jpg';
import categorySpa from '../../assets/categories/spa-cat.jpg';


const HomePageCategories = () => {
    return  <div class="homepage-cat p-rl-6 pos-rltv display-flex m-t-8">
    <div class="hp-cat-img pos-rltv">
        <img src={categoryRoom} alt="room" class="cat-img"/>
        <p class="cat-name fw-lght pos-absolute font-size-2pt6">Rooms</p>
    </div>
    <div class="hp-cat-img pos-rltv">
        <img src={categorySpa} alt="spa" class="cat-img"/>
        <p class="cat-name fw-lght pos-absolute font-size-2pt6">Spa</p>
    </div>
    <div class="hp-cat-img pos-rltv">
        <img src={categoryHoliday} alt="holiday" class="cat-img"/>
        <p class="cat-name fw-lght pos-absolute font-size-2pt6">Holiday</p>
    </div>
    <div class="hp-cat-img pos-rltv">
        <img src={categoryDining} alt="dining" class="cat-img"/>
        <p class="cat-name fw-lght pos-absolute font-size-2pt6">Dining</p>
    </div>
    </div>
}

export { HomePageCategories }
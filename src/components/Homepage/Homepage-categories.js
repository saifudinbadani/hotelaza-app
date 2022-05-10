import '../../css/home-page.css';
import categoryRoom from '../../assets/categories/room-cat.jpg';
import categoryDining from '../../assets/categories/dining-cat.jpg';
import categoryHoliday from '../../assets/categories/holiday-cat.jpg';
import categorySpa from '../../assets/categories/spa-cat.jpg';
import { useFilter } from '../../context/filterContext';
import { useNavigate } from "react-router-dom"



const HomePageCategories = () => {
    const navigate = useNavigate();
    const { dispatch } = useFilter();
    
    return  <div className="homepage-cat p-rl-6 pos-rltv display-flex m-t-8">
   
   <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "ROOMS"}); navigate("/productlist")}}>
        <img src={categoryRoom} alt="room" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Rooms</p>
    </div>
    

   
    <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "SPA"}); navigate("/productlist")}}>
        <img src={categorySpa} alt="spa" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Spa</p>
    </div>
   

   
    <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "HOLIDAY"}); navigate("/productlist")}}>
        <img src={categoryHoliday} alt="holiday" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Holiday</p>
    </div>
   

   
    <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "DINING"}); navigate("/productlist")}}>
        <img src={categoryDining} alt="dining" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Dining</p>
    </div>
   
    </div>
}

export { HomePageCategories }
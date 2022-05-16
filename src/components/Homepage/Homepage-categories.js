import '../../css/home-page.css';
import categoryRoom from '../../assets/categories/room-cat.jpg';
import categoryDining from '../../assets/categories/dining-cat.jpg';
import categoryHoliday from '../../assets/categories/holiday-cat.jpg';
import categorySpa from '../../assets/categories/spa-cat.jpg';
import { useFilter } from '../../context/filterContext';
import { useNavigate } from "react-router-dom"
import { useAuth } from '../../context/AuthContext';



const HomePageCategories = () => {
    const { initialAuth: { isLoggedIn }} = useAuth();
    const navigate = useNavigate();
    const { dispatch } = useFilter();
    
    const navigateCategories = () => {
       if(isLoggedIn){
           navigate('/productlist')
       } else{
           navigate('/login')
       }
    }
    return  <div className="homepage-cat p-rl-6 pos-rltv display-flex m-t-8">
   
   <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "ROOMS"}); navigateCategories()}}>
        <img src={categoryRoom} alt="room" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Rooms</p>
    </div>
    

   
    <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "SPA"}); navigateCategories()}}>
        <img src={categorySpa} alt="spa" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Spa</p>
    </div>
   

   
    <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "HOLIDAY"}); navigateCategories()}}>
        <img src={categoryHoliday} alt="holiday" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Holiday</p>
    </div>
   

   
    <div className="hp-cat-img pos-rltv" onClick={() => {dispatch({type: "DINING"}); navigateCategories()}}>
        <img src={categoryDining} alt="dining" className="cat-img"/>
        <p className="cat-name fw-lght pos-absolute font-size-2pt6">Dining</p>
    </div>
   
    </div>
}

export { HomePageCategories }
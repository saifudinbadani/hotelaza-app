import '../../css/home-page.css';
import Hotelroom from '../../assets/hotel-room-homepage.jpeg';

const HomePageHero = () => {
    return <div className="homepage-img resp-img m-t-8">
    <img src={Hotelroom} alt="hotel-room"/>
</div>
}

export {HomePageHero}
import '../../css/home-page.css';
import spaHomePage from '../../assets/spa-homepage.jpg';
import diningHomePage from '../../assets/dining-homepage.jpg';

const HomePageCards = () => {
    return <main className="homepage-cards display-flex p-rl-6">
    
    <div className="card-h display-flex">
        <div className="card-img-h">
            <img src={spaHomePage} alt="Spa"/>
        </div>
        <div className="card-content-h display-flex-c">
            <h3 className="card-title heading-3 fw-lght">Spa Treatments</h3>
            <small className="card-author">by Hotelaza</small>
            <p className="card-text heading-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                unde!
            </p>
            <div className="card-footer-h">
                <button className="card-btn btn btn-solid-primary">Explore</button>
            </div>
        </div>
    </div>
    
    <div className="card-h display-flex">
        <div className="card-img-h">
         <img src={diningHomePage} alt="Dining"/>
        </div>
        <div className="card-content-h display-flex-c">
            <h3 className="card-title heading-3 fw-lght">Experience Dining</h3>
            <small className="card-author">by Hotelaza</small>
            <p className="card-text heading-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                unde!
            </p>
            <div className="card-footer-h">
                <button className="card-btn btn btn-solid-primary">Explore</button>
            </div>
        </div>
    </div>
</main>
}
export {HomePageCards}
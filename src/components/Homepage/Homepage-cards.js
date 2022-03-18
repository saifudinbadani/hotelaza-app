import '../../css/home-page.css';
import spaHomePage from '../../assets/spa-homepage.jpg';
import diningHomePage from '../../assets/dining-homepage.jpg';

const HomePageCards = () => {
    return <main class="homepage-cards display-flex p-rl-6">
    
    <div class="card-h display-flex">
        <div class="card-img-h">
            <img src={spaHomePage} alt="Spa"/>
        </div>
        <div class="card-content-h display-flex-c">
            <h3 class="card-title heading-3 fw-lght">Spa Treatments</h3>
            <small class="card-author">by Hotelaza</small>
            <p class="card-text heading-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                unde!
            </p>
            <div class="card-footer-h">
                <button class="card-btn btn btn-solid-primary">Explore</button>
            </div>
        </div>
    </div>
    
    <div class="card-h display-flex">
        <div class="card-img-h">
         <img src={diningHomePage} alt="Dining"/>
        </div>
        <div class="card-content-h display-flex-c">
            <h3 class="card-title heading-3 fw-lght">Experience Dining</h3>
            <small class="card-author">by Hotelaza</small>
            <p class="card-text heading-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                unde!
            </p>
            <div class="card-footer-h">
                <button class="card-btn btn btn-solid-primary">Explore</button>
            </div>
        </div>
    </div>
</main>
}
export {HomePageCards}
import '../css/home-page.css';
import { HomePageCategories, HomePageCards, HomePageHero } from '../components/Homepage/';


const HomePage = () => {
    return <div class="home-page-body bg-clr">
        <HomePageCategories />
      <HomePageHero />
      <HomePageCards />
    </div>
}

export { HomePage }
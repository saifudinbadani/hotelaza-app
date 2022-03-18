import '../css/home-page.css';
import { HomePageCategories } from '../components/Homepage/Homepage-categories';
import { HomePageHero } from '../components/Homepage/Homepage-main-hero';
import { HomePageCards } from '../components/Homepage/Homepage-cards';

const HomePage = () => {
    return <div class="home-page-body bg-clr">
        <HomePageCategories />
      <HomePageHero />
      <HomePageCards />
    </div>
}

export { HomePage }
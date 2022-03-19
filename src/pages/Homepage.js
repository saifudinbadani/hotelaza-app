import '../css/home-page.css';
import { HomePageCategories, HomePageCards, HomePageHero } from '../components/Homepage';
import { Navigation } from '../components/Navigation';

const HomePage = () => {

    return <div className='home-page-body bg-clr'>
        <Navigation />
        <HomePageCategories />
        <HomePageHero />
        <HomePageCards />
        </div>
    
    
}

export { HomePage }
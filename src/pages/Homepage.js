import '../css/home-page.css';
import { HomePageCategories, HomePageHero } from '../components/Homepage';
import { Navigation } from '../components/Navigation';

const HomePage = () => {

    return <div className='home-page-body bg-clr'>
        <Navigation />
        <HomePageCategories />
        <HomePageHero />
        </div>
    
    
}

export { HomePage }
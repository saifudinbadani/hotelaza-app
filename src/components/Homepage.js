import '../css/home-page.css';
import { HomePageCategories, HomePageCards, HomePageHero } from '../components/Homepage/';


const HomePage = () => {

    return <>
      <HomePageCategories />
      <HomePageHero />
      <HomePageCards />
    </>
    
    
}

export { HomePage }
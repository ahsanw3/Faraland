import './App.css';
import Backers from './components/backers';
import Banner from './components/banner/index';
import Crystals from './components/crystals';
import Features from './components/features';
import Footer from './components/footer/index';
import Heroes from './components/heroes';
import Home from './components/Home/index';
import HomeFeatures from './components/homefeatures';
import NavBar from './components/navbar/index';
import RoadMap from './components/roadmap';
import Secure from './components/secure';
import SoulStone from './components/soulstone';
function App() {
  return (
    <>
    
    <div className="App">
     <NavBar/>
     <Banner />
     <div className='home w-full pt-24 '>
        <Home />
        <Heroes />
        <HomeFeatures />
        <Features />
        <Crystals />
        <SoulStone />
        <RoadMap />
        <Backers/>
        <Secure />
        <Footer />
      </div>
    
    </div>
    
    </>
  );
}

export default App;

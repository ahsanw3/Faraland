import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Banner from './components/Banner';
import Heroes from './components/Heroes';
import Crystals from './components/Crystals';
import HomeFeatures from './components/HomeFeatures';
import SoulStone from './components/SoulStone';
import Backers from './components/Backers';
import Secure from './components/Secure';
import Footer from './components/Footer';
import Features from './components/Features';
import RoadMap from './components/RoadMap';
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

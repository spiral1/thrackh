
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {HeroImage} from './components/HeroImage';
import {GalleryCommissions} from './components/GalleryCommissions';





function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroImage/>
      <GalleryCommissions title={'Basic Row Layout'} photos={this.state.photos.slice(0, 20)}/>
    </div>
  );
}

export default App;

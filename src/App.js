
import './App.css';

import Navbar from './components/Navbar/Navbar';
import {HeroImage} from './components/HeroImage';
import GalleryCommissions from './components/GalleryCommissions';

import {photos} from "./components/photos"




function App() {
  return (
    <div className="root">
      <Navbar />
      <HeroImage/>
      <GalleryCommissions images={photos} />
    </div>
  );
}

export default App;

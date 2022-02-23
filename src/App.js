
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {HeroImage} from './components/HeroImage'
import GalleryCommissions from './components/GalleryCommissions'
import GalleryArtwork from './components/GalleryArtwork'
import Bio from './components/Bio'
import Divider from './components/Divider'
import {photosCommissions} from "./components/photosCommissions"
import {photosArtwork}  from "./components/photosArtwork"




function App() {
  return (
    <div className="root">
      <Navbar />
      <HeroImage />
      <Bio />
      <GalleryArtwork images={photosArtwork} />
    
      <GalleryCommissions images={photosCommissions} />
      
    </div>
  );
}

export default App;

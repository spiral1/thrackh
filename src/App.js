
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {HeroImage} from './components/HeroImage'
import GalleryCommissions from './components/GalleryCommissions'
import GalleryArtwork from './components/GalleryArtwork'
import Bio from './components/Bio'
import {photosCommissions} from "./components/photosCommissions"
import {photosArtwork}  from "./components/photosArtwork"




function App() {
  return (
    <div className="root">
      <Navbar />
      <HeroImage/>
      <Bio />
      <GalleryCommissions images={photosCommissions} />
      <GalleryArtwork images={photosArtwork} />

    </div>
  );
}

export default App;

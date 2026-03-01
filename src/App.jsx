import { useState } from 'react';
import EntryPage from './components/EntryPage';
import MouseTrail from './components/MouseTrail';
import BackgroundMusic from './components/BackgroundMusic';
import GarlandDividerSVG from './components/SVGs/GarlandDividerSVG';
import VerticalGarlandSVG from './components/SVGs/VerticalGarlandSVG';
import { audioManager } from './utils/audioManager';
import Hero from './components/Hero';
import WeddingDetails from './components/WeddingDetails';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [entered, setEntered] = useState(false);
  const [side, setSide] = useState(null);
  const [audioEnabled, setAudioEnabled] = useState(false);

  const handleEnter = (selectedSide) => {
    setSide(selectedSide);
    setEntered(true);
    audioManager.playWelcome(selectedSide);
  };

  return (
    <div className="App">
      <MouseTrail />

      {/* Background music — starts from page load */}
      <BackgroundMusic />

      {/* Vertical garlands — fixed on both sides throughout the entire invitation */}
      <VerticalGarlandSVG side="left" opacity={0.10} width={48} />
      <VerticalGarlandSVG side="right" opacity={0.10} width={48} />

      {!entered && <EntryPage onEnter={handleEnter} onAudioEnabled={() => setAudioEnabled(true)} />}

      {entered && (
        <div className="main-content fade-in">
          <Hero />
          <div className="garland-divider"><GarlandDividerSVG /></div>
          <Story />
          <div className="garland-divider"><GarlandDividerSVG /></div>
          <WeddingDetails />
          <div className="garland-divider"><GarlandDividerSVG /></div>
          <Gallery />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

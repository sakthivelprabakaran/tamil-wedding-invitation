import { useState } from 'react';
import EntryPage from './components/EntryPage';
import MouseTrail from './components/MouseTrail';

import { audioManager } from './utils/audioManager';
import Hero from './components/Hero';
import WeddingDetails from './components/WeddingDetails';
import Story from './components/Story';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [entered, setEntered] = useState(false);
  const [side, setSide] = useState(null);

  const handleEnter = (selectedSide) => {
    setSide(selectedSide);
    setEntered(true);
    audioManager.playWelcome(selectedSide);
  };

  return (
    <div className="App">
      <MouseTrail />

      {!entered && <EntryPage onEnter={handleEnter} />}

      {entered && (
        <div className="main-content fade-in">
          <Hero />
          <Story />
          <WeddingDetails />
          <Gallery />
          <RSVP />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.scss';

// components
import Header from './Header';
import PlayButton from './PlayButton';
import Game from './Game';


function App() {

  const [ playButton, unsetPlayButton ] = useState(true);
  // const [ play, setPlay ] = useState(false);

  return (
    <div className="app">
      <Header />

      { playButton ? <PlayButton
          playButton = {playButton}
          unsetPlayButton = {unsetPlayButton} /> : <Game /> 
      }
      
    </div>
  );
}

export default App;

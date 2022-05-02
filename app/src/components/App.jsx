import React from 'react';
import './App.scss';

// components
import Header from './Header';
import PlayButton from './PlayButton';

function App() {
  return (
    <div className="app">
      <Header />
      <PlayButton />
    </div>
  );
}

export default App;

import React from 'react';

import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;

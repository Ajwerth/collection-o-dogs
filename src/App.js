import React from 'react';
import Header from './components/Header';
import Collection from './components/Collection';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Collection />
    </div>
  );
}

export default App;

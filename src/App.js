import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import List from './components/List';
import Collection from './components/Collection';
import Card from './components/Card'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <List />
      <Collection>
        <Card/>
      </Collection>
    </div>
  );
}

export default App;

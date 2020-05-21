import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Collection from "./components/Collection";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [collection, addToCollection] = useState([]);

  const testCollection = ["Golden", "PitBull"];

  const Cards = () =>
    collection.map((item, index) => {
      return <Card breed={item} key={index} />;
    });

  const handleClick = (e) => {
    e.persist();
    addToCollection((collection) => collection.concat(e.target.value));
  };

  return (
    <div className="App">
      <Header />
      <List handleClick={handleClick} />
      <Collection>
        <Cards />
      </Collection>
    </div>
  );
}

export default App;

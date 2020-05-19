import React, { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import Collection from "./components/Collection";
import Card from "./components/Card";
import "./App.css";

function App() {
  const initialArr = [];
  const [collection, setCollection] = useState(initialArr);

  const Cards = () =>
    collection.map((item) => {
      return <Card breed={item.name} />;
    });

  const handleClick = (target) => {
    setCollection((collection) => collection.concat(target));
  };

  return (
    <div className="App">
      <Header />
      <List handleClick={handleClick} />
      <Collection>
        <Card />
      </Collection>
    </div>
  );
}

export default App;

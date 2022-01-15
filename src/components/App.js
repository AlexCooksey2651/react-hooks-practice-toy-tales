import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [displayedToys, setDisplayedToys] = useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then(toys => setDisplayedToys(toys))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy) {
    setDisplayedToys([...displayedToys, newToy])
  }

  function handleCardRemoval(donatedToy) {
    const updatedToys = displayedToys.slice().filter(toy => {
      return toy.id !== donatedToy.id
    })
    setDisplayedToys(updatedToys)
  }

  function handleUpdateLikes(updatedToy) {
    const updatedToys = displayedToys.map(toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy
      } else {
        return toy
      }
    })
    setDisplayedToys(updatedToys)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={displayedToys} donateToy={handleCardRemoval} increaseLikes={handleUpdateLikes}/>
    </>
  );
}

export default App;

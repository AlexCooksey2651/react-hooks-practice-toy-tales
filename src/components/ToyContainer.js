import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, donateToy, increaseLikes }) {
  const toyCards = toys.map(toy => {
    return (
      <ToyCard key={toy.id} toy={toy} increaseLikes={increaseLikes} donateToy={donateToy}/>
    )
  })
  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;

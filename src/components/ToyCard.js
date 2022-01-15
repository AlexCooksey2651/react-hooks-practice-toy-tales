import React from "react";

function ToyCard({ toy, donateToy, increaseLikes }) {
  const { name, image, likes } = toy
  console.log(typeof likes)
  function handleClickDonate() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(donatedToy => donateToy(donatedToy))
  }

  function handleClickLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes ++,
      }),
    })
      .then(response => response.json())
      .then(updatedItem => increaseLikes(updatedItem))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleClickLike}>Like ❤️</button>
      <button className="del-btn" onClick={handleClickDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;

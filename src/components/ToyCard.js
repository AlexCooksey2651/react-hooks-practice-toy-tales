import React from "react";

function ToyCard({ toy, donateToy, increaseLikes }) {
  const { name, image, likes } = toy

  function handleClickDonate() {
    console.log(toy)
    console.log(toy.id)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => donateToy(toy))
  }

  function handleClickLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: (toy.likes + 1),
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

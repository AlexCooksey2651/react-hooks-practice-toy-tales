import React, { useState } from "react";

function ToyForm({ addToy }) {
  const [formData, setFormData] = useState(
    {
      "id": "",
      "name": "",
      "image": "",
      "likes": 0,
    }
  )

  function handleSubmit(event) {
    event.preventDefault()

    fetch("http://localhost:3001/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(newToy => addToy(newToy))
  }

  function handleChange(event) {
    const name = event.target.name
    const value = event.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;

import React, { useState } from "react";

const CreateDishItems = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [category1, setCategory1] = useState("");
  const [available, setAvailable] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, description, category, category1, available, price };
    onSubmit(item);
    handleClear();
  };
  const handleClear = () => {
    setName("");
    setDescription("");
    setPrice(0);
    setCategory("");
    setCategory1("");
    setAvailable("");
  };

  return (
    <div className="App">
      <h2>New Pet</h2>
      <form className="pet-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
        />
        <label htmlFor="kind">Kind</label>
        <select
          name="kind"
          id="kind"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Choose a kind</option>
          <option value="starter">Starter</option>
          <option value="main_course">Mani Course</option>
          <option value="dessert">Dessert</option>
          <option value="beverage">Beverage</option>
        </select>
        <label htmlFor="kind1">Kind1</label>
        <select
          name="kind1"
          id="kind1"
          value={category1}
          onChange={(e) => setCategory1(e.target.value)}
        >
          <option value="">Choose a kind</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="weekday">Weekday</option>
          <option value="weekend">WeekEnd</option>
        </select>
        <label htmlFor="available">Available</label>
        <select
          name="available"
          id="available"
          value={available}
          onChange={(e) => setAvailable(e.target.value)}
        >
          <option value="">Available</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button type="button" onClick={handleClear}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateDishItems;

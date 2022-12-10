import React, { useState } from "react";

const MenuForm = ({ onCancel, onSubmit, item }) => {
  const initialItem = item || {
    name: "",
    description: "",
    category: "",
    category1: "",
    available: "",
    price: 0,
  };
  const [name, setName] = useState(initialItem.name);
  const [description, setDescription] = useState(initialItem.description);
  const [category, setCategory] = useState(initialItem.category);
  const [price, setPrice] = useState(initialItem.price);
  const [category1, setCategory1] = useState(initialItem.category1);
  const [available, setAvailable] = useState(initialItem.available);

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
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
};

export default MenuForm;
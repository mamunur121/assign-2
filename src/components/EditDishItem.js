import React, { useState } from "react";
import Modal from "react-modal";

const EditDishItems = ({ onCancel, onSubmit, item }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [category, setCategory] = useState(item.category);
  const [price, setPrice] = useState(item.price);
  const [category1, setCategory1] = useState(item.category1);
  const [available, setAvailable] = useState(item.available);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...item,
      name,
      description,
      category,
      category1,
      available,
      price,
    });
  };

  return (
    <Modal isOpen={true} onRequestClose={onCancel}>
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
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default EditDishItems;

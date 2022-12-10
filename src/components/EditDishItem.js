import React, { useState } from "react";
import Modal from "react-modal";
import MenuForm from "./MenuForm";

const EditDishItems = ({ onCancel, onSubmit, item }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [catalogue, setCatalogue] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [available, setAvailable] = useState(item.available);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...item,
      name,
      description,
      mealTime,
      catalogue,
      available,
      price,
    });
  };

  return (
    <Modal isOpen={true} onRequestClose={onCancel}>
      <h2>Edit Item</h2>
      <form className="pet-form" onSubmit={handleSubmit}>
        <MenuForm
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          mealTime={mealTime}
          setMealTime={setMealTime}
          catalogue={setCatalogue}
          setCategory={setCatalogue}
          available={available}
          setAvailable={setAvailable}
          price={price}
          setPrice={setPrice}
        />
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default EditDishItems;

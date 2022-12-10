import React, { useState } from "react";
import Modal from "react-modal";
import MenuForm from "./MenuForm";

const EditDishItems = ({ onCancel, onSubmit, item }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [catalogue, setCatalogue] = useState(item.catalogue);
  const [mealTime, setMealTime] = useState(item.mealTime);
  const [available, setAvailable] = useState(item.available);
  const [timer, setTimer] = useState(item.timer);
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
      timer,
    });
  };

  return (
    <Modal isOpen={true} onRequestClose={onCancel}>
      <h2>Edit Item</h2>
      <form className="item-form" onSubmit={handleSubmit}>
        <MenuForm
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          mealTime={mealTime}
          setMealTime={setMealTime}
          catalogue={catalogue}
          setCatalogue={setCatalogue}
          available={available}
          setAvailable={setAvailable}
          price={price}
          setPrice={setPrice}
          timer={timer}
          setTimer={setTimer}
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

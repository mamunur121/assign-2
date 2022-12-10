import React, { useState } from "react";
import MenuForm from "./MenuForm";

const CreateDishItems = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [catalogue, setCatalogue] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, description, catalogue, mealTime, available, price };
    onSubmit(item);
    handleClear();
  };
  const handleClear = () => {
    setName("");
    setDescription("");
    setPrice(0);
    setCatalogue("");
    setMealTime("");
    setAvailable("");
  };

  return (
    <div className="App">
      <h2>New Menu</h2>
      <form className="pet-form" onSubmit={handleSubmit}>
        <MenuForm
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          mealTime={mealTime}
          setMealTime={setMealTime}
          setCategory={setCatalogue}
          catalogue={setCatalogue}
          available={available}
          setAvailable={setAvailable}
          price={price}
          setPrice={setPrice}
        />
        <button type="button" onClick={handleClear}>
          Cancel
        </button>
        <button type="submit" disabled={!name.length}>
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateDishItems;

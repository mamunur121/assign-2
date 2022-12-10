import React, { useState } from "react";
import MenuForm from "./MenuForm";

const CreateDishItems = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [catalogue, setCatalogue] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState("");
  const [timer, setTimer] = useState(0);

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
    setTimer(0);
    setCatalogue("");
    setMealTime("");
    setAvailable("");
  };

  return (
    <div className="App">
      <h2>New Menu</h2>
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
        <button type="button" onClick={handleClear}>
          Reset Item Value
        </button>
        <button type="submit" disabled={!name.length}>
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateDishItems;

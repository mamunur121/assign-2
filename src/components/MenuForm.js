import React from "react";

const MenuForm = ({
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
  catalogue,
  setCatalogue,
  mealTime,
  setMealTime,
  available,
  setAvailable,
  timer,
  setTimer,
}) => {
  return (
    <>
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
      <label htmlFor="catalogue">Catalogue</label>
      <select
        name="catalogue"
        id="catalogue"
        value={catalogue}
        onChange={(e) => setCatalogue(e.target.value)}
      >
        <option value="">Choose a Catalogue</option>
        <option value="starter">Starter</option>
        <option value="main_course">Main Course</option>
        <option value="dessert">Dessert</option>
        <option value="beverage">Beverage</option>
      </select>
      <label htmlFor="mealTime">Meal Time</label>
      <select
        name="mealTime"
        id="mealTime"
        value={mealTime}
        onChange={(e) => setMealTime(e.target.value)}
      >
        <option value="">Choose a Meal Time</option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        <option value="weekday">Weekday</option>
        <option value="weekend">WeekEnd</option>
      </select>
      <label htmlFor="available">Status</label>
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
      <label htmlFor="timer">Timer for Prepare Dish(in ms)</label>
      <input
        type="text"
        id="timer"
        value={timer}
        onChange={(e) => setTimer(e.target.value)}
      />
    </>
  );
};

export default MenuForm;

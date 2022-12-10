import React from "react";
import classNames from "classnames";
import EditDishItems from "./EditDishItem";
import { formatNumber } from "../utils/utils";

const MenuItem = ({
  item,
  currentItem,
  setCurrentItem,
  setIsNewItemOpen,
  handleDelete,
  saveItem,
}) => {
  const openModal = () => {
    setCurrentItem(item);
    setIsNewItemOpen(true);
  };
  const closeModal = () => {
    setCurrentItem(null);
    setIsNewItemOpen(false);
  };
  const display_sold_out = classNames(
    item?.available === "no" ? "sold_out" : "hidden"
  );
  const deactivate_item = classNames(
    item?.available === "no" ? "selectable" : ""
  );
  return (
    <div key={item._id} className={`item ${deactivate_item}`}>
      <div className="img__wrapper">
        <p className={display_sold_out}>Sold out</p>
        <h2>Name: {item.name}</h2>
        <p>Description: {item.description}</p>
        <h3>Price: {formatNumber(item.price)}</h3>
        <p>Menu: {item.catalogue}</p>
        <p>Day of the Time: {item.mealTime}</p>
        <p>Availability: {item.available}</p>
        <div className="actionButton">
          <button onClick={handleDelete} className="button">
            Delete Item:
          </button>
          <button className="button" onClick={openModal}>
            Edit Item
          </button>
          <button className="button">Order Item</button>
          {currentItem && (
            <EditDishItems
              onCancel={closeModal}
              onSubmit={saveItem}
              item={item}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

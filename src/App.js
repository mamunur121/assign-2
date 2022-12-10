import React, { useState } from "react";
import CreateDishItems from "./components/CreateDishItem";
import classNames from "classnames";
import EditDishItems from "./components/EditDishItem";
import Loading from "./components/Loading";
import {
  deleteItem,
  listItems,
  removeAllItems,
  update_create_Item,
} from "./api";

function App() {
  const [dishItems, setDishItems] = useState([]);
  const [isNewPetOpen, setNewPetOpen] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const saveItem = async (item) => {
    return update_create_Item(item)
      .then((updatedItem) => {
        setDishItems((items) =>
          items.map((item) =>
            item?._id === updatedItem?.data?._id ? updatedItem?.data : item
          )
        );
        setCurrentPet(null);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    listItems()
      .then((data) => {
        setDishItems(data?.data);
      })
      .finally(() => setLoading(false));
  }, [dishItems.length]);

  const handleRemoveItems = () => {
    const result = window.confirm(
      `Are you sure you want to Delete All the the Items?`
    );
    if (result) {
      removeAllItems().then(() => {
        setDishItems([]);
      });
    }
  };

  const handleSubmitItem = (item) => {
    return update_create_Item(item)
      .then((addedItem) => {
        const data = addedItem?.data;
        setDishItems((c) => [...c, { ...data }]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (dishItem) => {
    const result = window.confirm(
      `Are you sure you want to delete ${dishItem?.name}`
    );
    // const deletedItem = dishItems.filter((item) => item["_id"] !== itemId);
    if (result) {
      return deleteItem(dishItem).then(() => {
        setDishItems((items) =>
          items.filter((item) => item?._id !== dishItem?._id)
        );
        // setDishItems(deletedItem);
      });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div key={Math.random()}>
      <div
        className={classNames(dishItems.length === 0 ? "hidden" : "container")}
      >
        {dishItems &&
          dishItems.map((item) => {
            return (
              <div key={item._id} className="item">
                <div className="img__wrapper">
                  <p
                    className={classNames(
                      item?.available === "no" ? "sold_out" : "hidden"
                    )}
                  >
                    Sold out
                  </p>
                  <h2>Name: {item.name}</h2>
                  <p>Description: {item.description}</p>
                  <h3>
                    Price:{" "}
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price)}
                  </h3>
                  <p>Menu: {item.category}</p>
                  <p>Day of the Time: {item.category1}</p>
                  <p>Availability: {item.available}</p>
                  <button onClick={() => handleDelete(item)} className="button">
                    Delete Item:
                  </button>
                  <button
                    className="button"
                    onClick={() => {
                      setCurrentPet(item);
                      setNewPetOpen(true);
                    }}
                  >
                    Edit Item
                  </button>

                  {currentPet && (
                    <EditDishItems
                      onCancel={() => {
                        setCurrentPet(null);
                        setNewPetOpen(false);
                      }}
                      onSubmit={saveItem}
                      item={item}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>

      <CreateDishItems onSubmit={handleSubmitItem} />
      {dishItems.length >= 2 && (
        <button
          onClick={handleRemoveItems}
          className="button"
          type="button"
          style={{ marginTop: 10 }}
        >
          Remove all Items
        </button>
      )}
    </div>
  );
}

export default App;

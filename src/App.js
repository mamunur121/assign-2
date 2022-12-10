import React, { useState } from "react";
import CreateDishItems from "./components/CreateDishItem";
import classNames from "classnames";
import Loading from "./components/Loading";
import {
  deleteItem,
  listItems,
  removeAllItems,
  update_create_Item,
} from "./api";
import MenuItem from "./components/MenuItem";

function App() {
  const [dishItems, setDishItems] = useState([]);
  const [isNewItemOpen, setIsNewItemOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const saveItem = (item) => {
    return update_create_Item(item)
      .then((updatedItem) => {
        setDishItems((items) =>
          items.map((item) =>
            item?._id === updatedItem?.data?._id ? updatedItem?.data : item
          )
        );
        setCurrentItem(null);
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
    if (result) {
      return deleteItem(dishItem).then(() => {
        setDishItems((items) =>
          items.filter((item) => item?._id !== dishItem?._id)
        );
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
              <MenuItem
                item={item}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                setIsNewItemOpen={setIsNewItemOpen}
                handleDelete={() => handleDelete(item)}
                saveItem={saveItem}
              />
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

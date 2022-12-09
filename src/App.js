import React, { useState } from "react";
import CreateDishItems from "./components/CreateDishItem";
import axios from "axios";
import classNames from "classnames";
import EditDishItems from "./components/EditDishItem";
import Loading from "./components/Loading";
import { updatePet } from "./api";

function App() {
  const [data, setData] = useState([]);
  const [isNewPetOpen, setNewPetOpen] = useState(false);
  const [currentPet, setCurrentPet] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const savePet = async (pet) => {
    return updatePet(pet)
      .then((updatedPet) => {
        console.log("updatedPet", updatedPet?.data?._id);
        console.log();
        setData((pets) =>
          pets.map((pet) =>
            pet?._id === updatedPet?.data?._id ? updatedPet?.data : pet
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
    fetch(`http://localhost:9000/dishes/`)
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data);
      })
      .finally(() => setLoading(false));
  }, [data.length]);

  const handleClear = () => {
    fetch(`http://localhost:9000/dishes/clear`)
      .then((respinse) => respinse.json())
      .then((data) => {
        setData([]);
      });
  };

  const handleSubmit = (book) => {
    axios
      .put("http://localhost:9000/dishes", book)
      .then((book) => {
        const data = book.data;
        console.log(data);
        setData((c) => [...c, { ...data }]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleDelete = (itemId) => {
    const deleteItem = data.filter((item) => item["_id"] !== itemId);
    axios.delete(`http://localhost:9000/dishes/${itemId}`).then((data) => {
      setData((c) => [...c, data]);
    });
    setData(deleteItem);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div key={Math.random()}>
      <div className={classNames(data.length === 0 ? "hidden" : "container")}>
        {data &&
          data.map((item) => {
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
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="button"
                  >
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
                      onSubmit={savePet}
                      item={item}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </div>

      <CreateDishItems onSubmit={handleSubmit} />
      <button onClick={handleClear} className="button">
        Remove all Data
      </button>
    </div>
  );
}

export default App;

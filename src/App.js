import React, { useState } from "react";
import CreateDishItems from "./components/CreateDishItem";
import axios from "axios";
import classNames from "classnames";

function App() {
  const [data, setData] = useState([]);

  React.useEffect(() => {
    fetch(`http://localhost:9000/dishes/`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data?.data);
        setData(data?.data);
      });
  }, [data.length]);

  const handleClear = () => {
    // setTimeout(() => {
    //   axios.get("http://localhost:9000/dishes/clear").then((response) => response.).then((data) => {
    //     setData(data.data);
    //   });
    // }, 500);
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
                      item?.available === "no" ? "sold_out" : ""
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

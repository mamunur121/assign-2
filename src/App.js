import React, {useState} from 'react'
import useDishes from "./useDishes";
import Loading from "./Loading";
import useCreateDishes from "./createDishes";
import axios from "axios";
function App() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [category1, setCategory1] = useState('');
  const [available, setAvailable] = useState('');

  const [data, setData] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    const book = {name, description, category, category1, available}

    axios
        .put('http://localhost:9000/dishes', book)
        .then((book) => {
          const data = book.data;
          setData(data);
        })
        .catch(err => {
          console.error(err);
        });
  };



  React.useEffect(()=> {
    fetch(`http://localhost:9000/dishes/`)
        .then((response) => response.json())
        .then((data) => setData(data.data));

  }, [data.length]);

  const handleClear = () => {
    axios.get('http://localhost:9000/dishes/clear')
        .then((data) => {
          setData(data.data)
        })
  }
  return (
    <div className="App">
        <h2>New Pet</h2>
      <form className="pet-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <label htmlFor="kind">Kind</label>
        <select
          name="kind"
          id="kind"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Choose a kind</option>
          <option value="starter">Starter</option>
          <option value="main_course">Mani Course</option>
          <option value="dessert">Dessert</option>
          <option value="beverage">Beverage</option>
        </select>
        <label htmlFor="kind1">Kind1</label>
        <select
          name="kind1"
          id="kind1"
          value={category1}
          onChange={e => setCategory1(e.target.value)}
        >
          <option value="">Choose a kind</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="weekday">Weekday</option>
          <option value="weekend">WeekEnd</option>
        </select>
        <label htmlFor="available">Available</label>
        <select
          name="available"
          id="available"
          value={available}
          onChange={e => setAvailable(e.target.value)}
        >
          <option value="">Available</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <button type="button" onClick={handleClear}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;

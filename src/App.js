import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipe";

function App() {
  const APP_ID = "ebb46844";
  const APP_KEY = "f64fd52c3ff4771ade711e7e2138f695";

  const [recipes, setRecipes] = useState([]);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search query here!"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      {recipes.map((recipe) => (
        <Recipe />
      ))}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipe";
import axios from "axios";

function App() {
  const APP_ID = "ebb46844";
  const APP_KEY = "f64fd52c3ff4771ade711e7e2138f695";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  // const getRecipes = React.useEffect(() => {
  //   axios
  //     .get(
  //       `search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
  //     )
  //     .then(function (response) {
  //       const data = response.json();
  //       setRecipes(data.hits);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // });

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    console.log(search);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Search query here!"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

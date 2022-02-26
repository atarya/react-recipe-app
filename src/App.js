import logo from "./logo.svg";
import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const APP_ID = "ebb46844"
  const APP_KEY = "f64fd52c3ff4771ade711e7e2138f695"

  useEffect(() => { console.log("Effect has been run") })

  return <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text" placeholder="Search query here!" />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  </div>;
}

export default App;

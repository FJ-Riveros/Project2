import React, { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import RecipeSearch from "./Components/RecipeSearch";
import WeekPlanning from "./Components/WeekPlanning";

function App() {
  const [inputFirstLetter, setInputFirstLetter] = useState("");

  useEffect(() => {
    init();
  }, [inputFirstLetter]);

  const init = async () => {
    if (inputFirstLetter.length === 1) {
      inputList();
    }
  };

  const inputList = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFirstLetter}`
    );
    const response = await data.json();
    console.log(response);
  };

  return (
    <>
      <div className="app">
        <Header />
        <RecipeSearch
          inputFirstLetter={inputFirstLetter}
          setInputFirstLetter={setInputFirstLetter}
        />
        <WeekPlanning />
      </div>
    </>
  );
}

export default App;

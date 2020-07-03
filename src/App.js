import React, { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import RecipeSearch from "./Components/RecipeSearch";
import WeekPlanning from "./Components/WeekPlanning";

function App() {
  //Receives the first letter from the input to load the info
  const [inputFirstLetter, setInputFirstLetter] = useState("");

  //Contains the data from the API
  const [data, setData] = useState("");

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
    setData(response);
    console.log(response.meals);
  };

  return (
    <>
      <div className="app">
        <Header />
        <RecipeSearch
          inputFirstLetter={inputFirstLetter}
          setInputFirstLetter={setInputFirstLetter}
          data={data}
        />
        <WeekPlanning />
      </div>
    </>
  );
}

export default App;

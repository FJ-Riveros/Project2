import React, { useEffect } from "react";
import Header from "./Components/Header.js";
import RecipeSearch from "./Components/RecipeSearch";
import WeekPlanning from "./Components/WeekPlanning";
function App() {
  useEffect(() => {
    inputList();
  }, []);

  const inputList = async () => {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
    );
    const response = await data.json();
    console.log(response);
  };

  return (
    <>
      <div className="app">
        <Header />
        <RecipeSearch />
        <WeekPlanning />
      </div>
    </>
  );
}

export default App;

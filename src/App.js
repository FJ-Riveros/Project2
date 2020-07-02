import React from "react";
import Header from "./Components/Header.js";
import RecipeSearch from "./Components/RecipeSearch";
import WeekPlanning from "./Components/WeekPlanning";
function App() {
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

import React, { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import RecipeSearch from "./Components/RecipeSearch";
import WeekPlanning from "./Components/WeekPlanning";
import GlobalStyle from "./Components/Styled/GlobalStyles";
import StyledApp from "./Components/Styled/StyledApp";
import MagicPassword from "./User Login";

function App() {
  //Receives the first letter from the input to load the info
  const [inputFirstLetter, setInputFirstLetter] = useState("");

  //Contains the data from the API
  const [data, setData] = useState("");

  //Contains the selected user option in the input
  const [searchText, setSearchText] = useState("");

  //Contains the response from the API for a random recipe
  const [randomRecipe, setRandomRecipe] = useState("");

  useEffect(() => {
    inputList();
  }, [inputFirstLetter]);

  const inputList = async () => {
    if (inputFirstLetter.length === 1) {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFirstLetter}`
      );
      const response = await data.json();
      setData(response);
      console.log(response);
    }
  };

  return (
    <>
      <StyledApp>
        <Header />
        <RecipeSearch
          setInputFirstLetter={setInputFirstLetter}
          data={data}
          searchText={searchText}
          setSearchText={setSearchText}
          randomRecipe={randomRecipe}
          setRandomRecipe={setRandomRecipe}
        />
        <WeekPlanning />
        <MagicPassword />
      </StyledApp>
      <GlobalStyle />
    </>
  );
}

export default App;

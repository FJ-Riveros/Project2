import React, { useState } from "react";
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
  const [data, setData] = useState(undefined);

  //Contains the selected user option in the input
  const [searchText, setSearchText] = useState("");

  //Contains the response from the API for a random recipe
  const [randomRecipe, setRandomRecipe] = useState("");

  return (
    <>
      <StyledApp>
        <Header />
        <RecipeSearch
          setInputFirstLetter={setInputFirstLetter}
          inputFirstLetter={inputFirstLetter}
          data={data}
          setData={setData}
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

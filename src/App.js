import React, { useEffect, useState } from "react";
import Header from "./Components/Header.js";
import RecipeSearch from "./Components/RecipeSearch";
import WeekPlanning from "./Components/WeekPlanning";
import GlobalStyle from "./Components/Styled/GlobalStyles";
import StyledApp from "./Components/Styled/StyledApp";

function App() {
  //Receives the first letter from the input to load the info
  const [inputFirstLetter, setInputFirstLetter] = useState("");

  //Contains the data from the API
  const [data, setData] = useState("");

  //Contains the selected user option in the input
  const [searchText, setSearchText] = useState("");

  //Listens to the random button
  const [random, setRandom] = useState(false);

  //Contains the response from the API for a random recipe
  const [randomRecipe, setRandomRecipe] = useState("");

  const randomFetch = async () => {
    const randomRecipeFetch = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const aleatoryRecipeData = await randomRecipeFetch.json();
    setRandomRecipe(aleatoryRecipeData);
    setRandom(false);
    console.log(randomRecipe);
  };

  //Change the way i do this fetch
  random === true && randomFetch();

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
    console.log(response);
  };

  return (
    <>
      <StyledApp>
        <Header />
        {console.log(random)}
        <RecipeSearch
          setInputFirstLetter={setInputFirstLetter}
          data={data}
          searchText={searchText}
          setSearchText={setSearchText}
          setRandom={setRandom}
        />
        <WeekPlanning />
      </StyledApp>
      <GlobalStyle />
    </>
  );
}

export default App;

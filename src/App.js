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

  //Contains the response from the API for a random recipe
  const [randomRecipe, setRandomRecipe] = useState("");

  const randomFetch = async () => {
    const randomRecipeFetch = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const aleatoryRecipeData = await randomRecipeFetch.json();
    setRandomRecipe(aleatoryRecipeData);
    console.log(randomRecipe);
  };

  //llamar a la funcion al hacer click en random, fetch en la misma pag
  //PROBAR DEBOUNCER EN EL BOTON RANDOM
  //Por qué no funciona la primera vez
  /*useEffect(() => {
    random === true && randomFetch();
  }, [random]);*/

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
          randomFetch={randomFetch}
        />
        <WeekPlanning />
      </StyledApp>
      <GlobalStyle />
    </>
  );
}

export default App;

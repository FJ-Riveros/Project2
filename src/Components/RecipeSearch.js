import React, { useState } from "react";
import Input from "./InputAutocomplete.js";
import Results from "./Results";
import SectionTitle from "./Styled/StyledSectionTitle";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import ButtonsContainer from "./Styled/StyledButtonsContainer";
import StyleResults from "./Styled/StyledResults";

const RecipeSearch = ({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
  randomRecipe,
  randomFetch,
}) => {
  //This variable stores the position of the recipe in the array
  let index;

  //Follows if the search button is clicked
  const [searchClick, setSearchClick] = useState(false);

  const [buttonchoosed, setButtonChoosed] = useState("");

  //Tracks the answer of the user and matches it with the api response
  const findAlgorithm = () => {
    for (let i = 0; i < data.meals.length; i++) {
      if (data.meals[i].strMeal === searchText) {
        index = i;
      }
    }

    //setSearchClick(false); //Replant this to call the component
  };

  //Search trigger
  searchClick === true && findAlgorithm();

  //Calling multiple events button search
  const searchButtonEvents = () => {
    setSearchClick(true);
    setButtonChoosed("Search");
  };

  //Calling multiple events button random
  const randomButtonEvents = () => {
    randomFetch();
    setButtonChoosed("Random");
  };

  return (
    <>
      <StyledSectionContainer minheight>
        <SectionTitle>Recipe Search</SectionTitle>
        <Input
          setInputFirstLetter={setInputFirstLetter}
          data={data}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <ButtonsContainer>
          <button onClick={() => searchButtonEvents()}>Search</button>
          <button onClick={() => randomButtonEvents()}>Random</button>
        </ButtonsContainer>
        {buttonchoosed}
        <StyleResults>
          {buttonchoosed === "Search" ? (
            index !== undefined ? (
              <Results data={data} index={index} randomRecipe={randomRecipe} />
            ) : (
              searchClick === true && "No results found"
            )
          ) : (
            <Results data={data} index={index} randomRecipe={randomRecipe} />
          )}
        </StyleResults>
      </StyledSectionContainer>
    </>
  );
};

export default RecipeSearch;

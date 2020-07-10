import React, { useState } from "react";
import Input from "./InputAutocomplete.js";
import Results from "./Results";
import SectionTitle from "./Styled/StyledSectionTitle";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import ButtonsContainer from "./Styled/StyledButtonsContainer";

const RecipeSearch = ({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
}) => {
  //This variable stores the position of the recipe in the array
  let index;

  const [searchClick, setSearchClick] = useState(false);

  //Tracks if there is anything to show in the result
  const [result, setResult] = useState(false);

  //Tracks the answer of the user and matches it with the api response
  const findAlgorithm = () => {
    for (let i = 0; i < data.meals.length; i++) {
      if (data.meals[i].strMeal === searchText) {
        index = i;
      }
    }
    //setResult(true);
    //setSearchClick(false); //Replant this to call the component
  };

  //Search trigger
  searchClick === true && findAlgorithm();

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
          <button onClick={() => setSearchClick(true)}>Search</button>
          <button>Random</button>
        </ButtonsContainer>
        <div className="RecipeSearch-results">
          {index !== undefined ? (
            <Results data={data} index={index} />
          ) : (
            searchClick === true && "No results found"
          )}
        </div>
      </StyledSectionContainer>
    </>
  );
};

export default RecipeSearch;

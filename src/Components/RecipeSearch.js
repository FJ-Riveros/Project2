import React, { useState } from "react";
import Input from "./InputAutocomplete.js";
import Results from "./Results";
import SectionTitle from "./Styled/StyledSectionTitle";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import Buttons from "./Styled/StyledButtons";

const RecipeSearch = ({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
}) => {
  //This variable stores the position of the recipe in the array
  let index;
  const [searchClick, setSearchClick] = useState(false);

  //Tracks the answer of the user and matches it with the api response
  const findAlgorithm = () => {
    for (let i = 0; i < data.meals.length; i++) {
      if (data.meals[i].strMeal === searchText) {
        index = i;
      }
    }
    //setSearchClick(false); Replant this to call the component
  };
  //Search trigger
  searchClick === true ? findAlgorithm() : console.log("notClicked");
  console.log(index);

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
        <Buttons>
          <button onClick={() => setSearchClick(true)}>Search</button>
          <button>Random</button>
        </Buttons>
        <div className="RecipeSearch-results">
          {searchClick === true ? (
            <Results data={data} index={index} />
          ) : (
            console.log("Componente fallido")
          )}
        </div>
      </StyledSectionContainer>
    </>
  );
};

export default RecipeSearch;

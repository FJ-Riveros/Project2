import React, { useState } from "react";
import Input from "./InputAutocomplete.js";
import Results from "./Results";
import SectionTitle from "./Styled/StyledSectionTitle";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import ButtonsContainer from "./Styled/StyledButtonsContainer";
import StyleResults from "./Styled/StyledResults";
import { RandomFetch } from "../APICalls";
import { FindAlgorithm } from "../Utils";

const RecipeSearch = ({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
  randomRecipe,
  setRandomRecipe,
}) => {
  //Follows if the search button is clicked
  const [searchClick, setSearchClick] = useState(false);

  const [buttonchoosed, setButtonChoosed] = useState("");

  const [index, setIndex] = useState(undefined);

  const searchAlgorithmCall = async () => {
    setIndex(await FindAlgorithm(data, searchText));
  };

  //Search trigger
  searchClick === true && searchAlgorithmCall();

  //Calling multiple events button search
  const searchButtonEvents = () => {
    setSearchClick(true);
    setButtonChoosed("Search");
  };

  //Calling multiple events button random
  const randomButtonEvents = async () => {
    setRandomRecipe(await RandomFetch());
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
            index !== undefined ? ( //Problema en esta linea, no da tiempo al for a terminar
              <Results
                data={data}
                index={index}
                randomRecipe={randomRecipe}
                buttonchoosed={buttonchoosed}
              />
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

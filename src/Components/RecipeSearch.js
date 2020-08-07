import React, { useState } from "react";
import Input from "./InputAutocomplete.js";
import Results from "./Results";
import SectionTitle from "./Styled/StyledSectionTitle";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import ButtonsContainer from "./Styled/StyledButtonsContainer";
import { RandomFetch } from "../APICalls";
import { FindAlgorithm, HomeButton } from "../Utils";

const RecipeSearch = ({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
  randomRecipe,
  setRandomRecipe,
  inputFirstLetter,
  setData,
}) => {
  const [buttonchoosed, setButtonChoosed] = useState("");

  const [index, setIndex] = useState(undefined);

  //Calling multiple events button search
  const searchButtonEvents = async () => {
    data !== undefined && setIndex(await FindAlgorithm(data, searchText));
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
          inputFirstLetter={inputFirstLetter}
          data={data}
          setData={setData}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <ButtonsContainer>
          <button onClick={() => searchButtonEvents()}>Search</button>
          <button onClick={() => randomButtonEvents()}>Random</button>
        </ButtonsContainer>
        {buttonchoosed !== "" && (
          <Results
            data={data}
            index={index}
            randomRecipe={randomRecipe}
            buttonchoosed={buttonchoosed}
          />
        )}
      </StyledSectionContainer>
      <HomeButton />
    </>
  );
};

export default RecipeSearch;

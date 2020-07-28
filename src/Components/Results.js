import React from "react";
import ResultsStyled from "./Styled/StyledResults";

const Results = ({ data, index, randomRecipe, buttonchoosed }) => {
  return (
    <ResultsStyled>
      {buttonchoosed === "Search"
        ? index !== undefined && (
            <>
              <h1>{data.meals[index].strMeal}</h1>
              <img
                src={data.meals[index].strMealThumb}
                width="40%"
                height="auto"
                alt="Searched Recipe"
              ></img>
            </>
          )
        : randomRecipe !== "" && (
            <>
              <h1>{randomRecipe.meals[0].strMeal}</h1>
              <img
                alt="Random Recipe"
                src={randomRecipe.meals[0].strMealThumb}
                width="40%"
                height="auto"
                alt="Random Recipe"
              ></img>
            </>
          )}
    </ResultsStyled>
  );
};

export default Results;

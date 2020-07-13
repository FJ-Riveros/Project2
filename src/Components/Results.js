import React from "react";

//RandomRecipe representarlo teniendo en cuenta un if
//que se active con el botón random

const Results = ({ data, index, randomRecipe, buttonChoosed }) => {
  return buttonChoosed === "Search"
    ? index !== undefined && (
        <img
          src={data.meals[index].strMealThumb}
          width="40%"
          height="auto"
        ></img>
      )
    : randomRecipe !== "" && (
        <img
          src={randomRecipe.meals[0].strMealThumb}
          width="40%"
          height="auto"
        ></img>
      );
};

export default Results;

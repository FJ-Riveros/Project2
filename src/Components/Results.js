import React from "react";

//RandomRecipe representarlo teniendo en cuenta un if
//que se active con el botón random

const Results = ({ data, index, randomRecipe, buttonchoosed }) => {
  return buttonchoosed === "Search" ? (
    index !== undefined ? (
      <img
        src={data.meals[index].strMealThumb}
        width="40%"
        height="auto"
        alt="Random Recipe"
      ></img>
    ) : (
      console.log("hola")
    )
  ) : (
    randomRecipe !== "" && (
      <img
        alt="Random Recipe"
        src={randomRecipe.meals[0].strMealThumb}
        width="40%"
        height="auto"
      ></img>
    )
  );
};

export default Results;

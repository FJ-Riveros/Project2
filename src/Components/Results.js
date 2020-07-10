import React from "react";

//RandomRecipe representarlo teniendo en cuenta un if
//que se active con el botón random

const Results = ({ data, index, randomRecipe }) => {
  return (
    <img src={data.meals[index].strMealThumb} width="40%" height="auto"></img>
  );
};

export default Results;

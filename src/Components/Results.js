import React from "react";

const Results = ({ data, index }) => {
  return (
    <img src={data.meals[index].strMealThumb} width="40%" height="auto"></img>
  );
};

export default Results;

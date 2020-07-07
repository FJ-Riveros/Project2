import React from "react";

const Results = ({ data, index }) => {
  return <img src={data.meals[index].strMealThumb}></img>;
};

export default Results;

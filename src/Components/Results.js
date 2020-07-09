import React from "react";
import StyleResults from "./Styled/StyledResults";

const Results = ({ data, index }) => {
  return (
    <StyleResults>
      <img src={data.meals[index].strMealThumb} width="40%" height="auto"></img>
    </StyleResults>
  );
};

export default Results;

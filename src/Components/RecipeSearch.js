import React from "react";
import BorderedInput from "./InputBordered.js";

const RecipeSearch = () => {
  return (
    <>
      <div className="RecipeSearch">
        <h2>Recipe Search</h2>
        <BorderedInput />
        <button>Random</button>
      </div>
    </>
  );
};

export default RecipeSearch;

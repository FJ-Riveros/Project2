import React from "react";
import Input from "./InputAutocomplete.js";

const RecipeSearch = () => {
  return (
    <>
      <div className="RecipeSearch">
        <h2>Recipe Search</h2>
        <Input />
        <button>Random</button>
      </div>
    </>
  );
};

export default RecipeSearch;

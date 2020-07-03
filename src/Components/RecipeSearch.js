import React from "react";
import Input from "./InputAutocomplete.js";

const RecipeSearch = ({ setInputFirstLetter }) => {
  return (
    <>
      <div className="RecipeSearch">
        <h2>Recipe Search</h2>
        <Input setInputFirstLetter={setInputFirstLetter} />
        <button>Random</button>
      </div>
    </>
  );
};

export default RecipeSearch;

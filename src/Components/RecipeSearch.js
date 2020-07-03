import React from "react";
import Input from "./InputAutocomplete.js";

const RecipeSearch = ({ setInputFirstLetter, data }) => {
  return (
    <>
      <div className="RecipeSearch">
        <h2>Recipe Search</h2>
        <Input setInputFirstLetter={setInputFirstLetter} data={data} />
        <button>Random</button>
      </div>
    </>
  );
};

export default RecipeSearch;

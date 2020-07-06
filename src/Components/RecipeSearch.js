import React from "react";
import Input from "./InputAutocomplete.js";

const RecipeSearch = ({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
}) => {
  /* searchText !== ""
    ? data.meals.forEach((recipe) => {
        if (recipe.strMeal === searchText) {
          console.log("Funciona");
        }
      })
    : console.log("No funciona");
*/
  return (
    <>
      <div className="RecipeSearch">
        <h2>Recipe Search</h2>
        <Input
          setInputFirstLetter={setInputFirstLetter}
          data={data}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <div className="RecipeSearch-buttons">
          <button>Search</button>
          <button>Random</button>
        </div>
        <div className="RecipeSearch-results"></div>
      </div>
    </>
  );
};

export default RecipeSearch;

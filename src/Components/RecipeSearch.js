import React, { useState } from "react";
import Input from "./InputAutocomplete.js";
import Results from "./Results";

const RecipeSearch = ({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
}) => {
  //This variable stores the position of the recipe in the array
  let index;
  const [searchClick, setSearchClick] = useState(false);

  //Tracks the answer of the user and matches it with the api response
  const findAlgorithm = () => {
    for (let i = 0; i < data.meals.length; i++) {
      if (data.meals[i].strMeal === searchText) {
        index = i;
      }
    }
    //setSearchClick(false); Replant this to call the component
  };
  //Search trigger
  searchClick === true ? findAlgorithm() : console.log("notClicked");
  console.log(index);

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
          <button onClick={() => setSearchClick(true)}>Search</button>
          <button>Random</button>
        </div>
        <div className="RecipeSearch-results"></div>
        {searchClick === true ? (
          <Results data={data} index={index} />
        ) : (
          console.log("Componente fallido")
        )}
      </div>
    </>
  );
};

export default RecipeSearch;

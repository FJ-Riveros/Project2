import React, { useState } from "react";
import Input from "./InputAutocomplete.js";

const RecipeSearch = ({ setInputFirstLetter, data }) => {
  const [searchText, setSearchText] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="RecipeSearch">
        <h2>Recipe Search</h2>
        <Input
          setInputFirstLetter={setInputFirstLetter}
          data={data}
          setSearchText={setSearchText}
          isClicked={isClicked}
          searchText={searchText}
        />
        <div className="RecipeSearch-buttons">
          <button onClick={() => setIsClicked(true)}>Search</button>
          <button>Random</button>
          {searchText}
        </div>
      </div>
    </>
  );
};

export default RecipeSearch;

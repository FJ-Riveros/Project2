import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function FreeSolo({ setInputFirstLetter, data }) {
  const [recipe, setRecipe] = useState("");
  const recipeEvent = (event) => {
    setInputFirstLetter(event.target.value);
  };
  console.log(recipe);

  return (
    <div style={{ width: 300 }}>
      {data !== "" ? (
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={data.meals.map((options) => options.strMeal)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search for a recipe"
              margin="normal"
              variant="outlined"
              onChange={recipeEvent}
            />
          )}
        />
      ) : (
        <TextField
          label="Search for a recipe"
          margin="normal"
          variant="outlined"
          onChange={recipeEvent}
        />
      )}
    </div>
  );
}

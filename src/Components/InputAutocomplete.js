import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default function FreeSolo({
  setInputFirstLetter,
  data,
  setSearchText,
  searchText,
}) {
  return (
    <div style={{ width: 300 }}>
      {searchText}
      <Autocomplete
        onSelect={(event) => setSearchText(event.target.value)}
        id="free-solo-demo"
        freeSolo
        options={
          data === "" ? [] : data.meals.map((options) => options.strMeal)
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a recipe"
            margin="normal"
            variant="outlined"
            onChange={(event) => setInputFirstLetter(event.target.value)}
          />
        )}
      />
    </div>
  );
}

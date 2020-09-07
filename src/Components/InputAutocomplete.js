import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { inputList } from "../APICalls";

export default function FreeSolo({
  setInputFirstLetter,
  data,
  setSearchText,
  inputFirstLetter,
  setData,
}) {
  useEffect(() => {
    const APICalls = async () => {
      setData(await inputList(inputFirstLetter));
    };
    if (inputFirstLetter.length === 1) {
      APICalls();
    }
  }, [inputFirstLetter]);

  const optionsChecker = () => {
    if (data === undefined || data.meals === null) {
      return ["Type the name of the recipe"];
    } else {
      return data.meals.map((options) => options.strMeal);
    }
  };
  return (
    <div style={{ width: 200 }}>
      <Autocomplete
        onSelect={(event) => setSearchText(event.target.value)}
        onChange={(event) => setSearchText(event.target.value)}
        id="free-solo-demo"
        freeSolo
        options={
          // data === undefined ? [] : data.meals.map((options) => options.strMeal)
          optionsChecker()
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

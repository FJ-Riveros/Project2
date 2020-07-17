import { setRandomRecipe } from "./App";

export const RandomFetch = async () => {
  const randomRecipeFetch = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const aleatoryRecipeData = await (await fetch(randomRecipeFetch)).json();
  //setRandomRecipe(aleatoryRecipeData);
  console.log(aleatoryRecipeData);

  return aleatoryRecipeData;
};

//Terminar de exportar el random correctamente

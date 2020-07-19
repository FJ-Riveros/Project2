export const inputList = async (inputFirstLetter) => {
  if (inputFirstLetter.length === 1) {
    console.log("funciona");
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFirstLetter}`
    );
    const response = await data.json();
    return await response;
  }
};

export const RandomFetch = async () => {
  const randomRecipeFetch = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const aleatoryRecipeData = await (await fetch(randomRecipeFetch)).json();
  return aleatoryRecipeData;
};

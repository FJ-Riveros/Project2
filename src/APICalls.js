export const inputList = async (inputFirstLetter) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputFirstLetter}`
  );
  const response = await data.json();
  return response;
};

export const RandomFetch = async () => {
  const randomRecipeFetch = `https://www.themealdb.com/api/json/v1/1/random.php`;
  const aleatoryRecipeData = await (await fetch(randomRecipeFetch)).json();
  return aleatoryRecipeData;
};

export const getUsers = async () => {
  const request = await fetch(`${process.env.REACT_APP_BACKEND_URL}/getusers`);
  const usersDb = await request.json();
  console.log(usersDb);
  return usersDb;
};

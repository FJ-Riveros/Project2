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

export const registerUser = (formdata) => {
  fetch(`${process.env.REACT_APP_BACKEND_URL}/adduser`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formdata),
  }).then((response) => {
    console.log(response);
  });
};

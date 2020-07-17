//Tracks the answer of the user and matches it with the api response
export const FindAlgorithm = (data, searchText) => {
  for (let i = 0; i < data.meals.length; i++) {
    if (data.meals[i].strMeal === searchText) {
      return i;
    }
  }
};

import React from "react";
import { Link } from "react-router-dom";
//Tracks the answer of the user and matches it with the api response
export const FindAlgorithm = async (data, searchText) => {
  for (let i = 0; i < data.meals.length; i++) {
    if (data.meals[i].strMeal === searchText) {
      return i;
    }
  }
};

export const HomeButton = () => (
  <Link to="/">
    <button>Home</button>
  </Link>
);

/*Checks if the user input matches with the user stored in the database
  this algorith applies for the login and register*/
export const validateUserAlgorithm = (usersDb, userInput) => {
  for (let i = 0; i < usersDb.length; i++) {
    if (
      userInput.username === usersDb[i].username &&
      userInput.email === usersDb[i].email
    ) {
      return true;
    }
  }
  return false;
};

export const validateUserNameAlgorithm = (usersDb, formData) => {
  for (let i = 0; i < usersDb.length; i++) {
    if (formData.username === usersDb[i].username) {
      return true;
    }
  }
  return false;
};

export const validateEmailAlgorithm = (usersDb, formData) => {
  for (let i = 0; i < usersDb.length; i++) {
    if (formData.email === usersDb[i].email) {
      return true;
    }
  }
  return false;
};

export const getIndexOfCurrentUser = (usersDb, userEmail) => {
  for (let i = 0; i < usersDb.length; i++) {
    if (usersDb[i].email === userEmail) {
      return i;
    }
  }
  return null;
};

import React, { useState, useEffect } from "react";
import Header from "./Components/Header.js";
import RecipeSearch from "./Components/RecipeSearch";
import WeekPlanning from "./Components/WeekPlanning";
import GlobalStyle from "./Components/Styled/GlobalStyles";
import StyledApp from "./Components/Styled/StyledApp";
import UserLogin from "./Components/User Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from "./Components/FirstPage";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import { Magic } from "magic-sdk";
import { magicKey } from "./API/hidden";
import { getIndexOfCurrentUser } from "./Utils";
function App() {
  const magic = new Magic(magicKey);

  //Receives the first letter from the input to load the info
  const [inputFirstLetter, setInputFirstLetter] = useState("");
  //Contains the data from the API
  const [data, setData] = useState(undefined);

  //Contains the selected user option in the input
  const [searchText, setSearchText] = useState("");

  //Contains the response from the API for a random recipe
  const [randomRecipe, setRandomRecipe] = useState("");

  //Check if the user is logged in to load the correct interface
  const [userLogged, setUserLogged] = useState(false);

  //Contains all the info of the current user
  const [userInfo, setUserInfo] = useState("");

  //Variable to store all the users from the Db
  let getAllUsers;

  useEffect(() => {
    const getUsersFetch = () => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/getusers`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          getAllUsers = data;
        });
    };

    const isLoggedIn = async () => {
      const isLogged = await magic.user.isLoggedIn();
      if (isLogged) {
        const currentUserMetadata = await magic.user.getMetadata();
        setUserLogged(true);
        console.log(currentUserMetadata);
        const matchingAlgorithm = getIndexOfCurrentUser(
          getAllUsers,
          currentUserMetadata.email
        );
        setUserInfo(getAllUsers[matchingAlgorithm]);
      }
    };
    getUsersFetch();
    isLoggedIn();
  }, [userLogged]);
  return (
    <>
      <Router>
        <Header
          userLogged={userLogged}
          magic={magic}
          setUserLogged={setUserLogged}
        />
        <StyledApp>
          <Switch>
            <Route path="/" exact component={FirstPage} />
            <Route
              path="/RecipeSearch"
              render={() => (
                <RecipeSearch
                  setInputFirstLetter={setInputFirstLetter}
                  inputFirstLetter={inputFirstLetter}
                  data={data}
                  setData={setData}
                  searchText={searchText}
                  setSearchText={setSearchText}
                  randomRecipe={randomRecipe}
                  setRandomRecipe={setRandomRecipe}
                />
              )}
            />
            <Route path="/WeekPlanning" component={WeekPlanning} />
            <Route
              path="/MagicPasswordLogin"
              component={() => (
                <UserLogin
                  userLogged={userLogged}
                  setUserLogged={setUserLogged}
                  magic={magic}
                />
              )}
            />
            <Route path="/Register" component={Register} />
            <Route
              path="/Profile"
              component={() => <Profile userInfo={userInfo} />}
            />
          </Switch>
        </StyledApp>
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;

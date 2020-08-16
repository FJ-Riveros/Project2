import React, { useEffect, useState } from "react";
import StyledLogin from "./Styled/StyledLogin";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import { HomeButton } from "../Utils";
import { Link } from "react-router-dom";
import { validateUserAlgorithm } from "../Utils";
import { getUsers } from "../APICalls";

const UserLogin = ({ userLogged, setUserLogged, magic }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
  });

  const handleLogin = async () => {
    const email = userInput.email;
    if (email) {
      const loggIn = await magic.auth.loginWithMagicLink({ email });
      if (loggIn) {
        setUserLogged(true);
      }
    }
  };

  const handleLogout = async () => {
    await magic.user.logout();
    setUserLogged(false);
  };

  const userCredentials = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const validateUser = async (e) => {
    e.preventDefault();
    const usersDb = await getUsers();
    const validation = await validateUserAlgorithm(usersDb, userInput);
    validation ? handleLogin() : console.log("Wrong user or Password");
  };
  return (
    <>
      <StyledSectionContainer minheight>
        {userLogged ? (
          <>
            <h1>Current user:{"Usuario 1"}</h1>
            <button onClick={() => handleLogout()}>Logout</button>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <form onSubmit={(event) => validateUser(event)}>
              <input
                placeholder="Enter your username"
                name="username"
                required="required"
                onChange={userCredentials}
              />
              <input
                type="email"
                name="email"
                required="required"
                placeholder="Enter your email"
                onChange={userCredentials}
              />
              <button type="submit">Send</button>
            </form>
            <Link to="/Register">
              <button>Register now</button>
            </Link>
          </>
        )}
      </StyledSectionContainer>
      <HomeButton />
    </>
  );
};

export default UserLogin;

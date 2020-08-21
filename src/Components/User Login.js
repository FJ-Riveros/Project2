import React, { useEffect, useState } from "react";
import StyledLogin from "./Styled/StyledLogin";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import { HomeButton } from "../Utils";
import { validateUserAlgorithm } from "../Utils";
import { getUsers } from "../APICalls";
import { withRouter, Link } from "react-router-dom";

const UserLogin = (props) => {
  console.log(props);
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
  });

  const handleLogin = async () => {
    const email = userInput.email;
    if (email) {
      const loggIn = await props.magic.auth.loginWithMagicLink({ email });
      if (loggIn) {
        props.setUserLogged(true);
        props.history.push("/");
      }
    }
  };

  const handleLogout = async () => {
    await props.magic.user.logout();
    props.setUserLogged(false);
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
        {props.userLogged ? (
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

export default withRouter(UserLogin);

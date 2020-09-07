import React, { useState } from "react";
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
      try {
        const loggIn = await props.magic.auth.loginWithMagicLink({ email });
        if (loggIn) {
          props.setUserLogged(true);
          props.history.push("/");
        }
      } catch (error) {
        console.log(`The following error ocurred ${error}`);
        props.history.push("/");
      }
    }
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
      </StyledSectionContainer>
      <HomeButton />
    </>
  );
};

export default withRouter(UserLogin);

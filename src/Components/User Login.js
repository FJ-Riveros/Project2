import React, { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import StyledLogin from "./Styled/StyledLogin";
import StyledSectionContainer from "./Styled/StyledSectionContainer";
import { HomeButton } from "../Utils";
import { magicKey } from "../API/hidden";
import { Link } from "react-router-dom";
import { validateUserAlgorithm } from "../Utils";

const UserLogin = ({ userLogged, setUserLogged }) => {
  //API Key
  const magic = new Magic(magicKey);

  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    render();
  }, []);

  const render = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      const userMetadata = await magic.user.getMetadata();
      setUserLogged(true);
    }
  };

  const handleLogin = async () => {
    const email = userInput.email;
    if (email) {
      await magic.auth.loginWithMagicLink({ email });
      render();
    }
  };

  const handleLogout = async () => {
    await magic.user.logout();
    render();
    setUserLogged(false);
  };

  const userCredentials = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const validateUser = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_BACKEND_URL}/getusers`)
      .then((response) => response.json())
      .then((usersDb) => {
        validateUserAlgorithm(usersDb, userInput)
          ? handleLogin()
          : console.log("wrong user or password");
      });
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
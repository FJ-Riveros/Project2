import React, { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import StyledLogin from "./Components/Styled/StyledLogin";
import StyledSectionContainer from "./Components/Styled/StyledSectionContainer";

const UserLogin = () => {
  //Check if the user is logged in to load the correct interface
  const [userLogged, setUserLogged] = useState(false);

  //API Key
  const magic = new Magic("pk_test_EA95F9581FBBBD21");

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

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
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

  return (
    <>
      <StyledSectionContainer minheight>
        {userLogged ? (
          <>
            <h1>
              Current user:{"Usuario 1"}
              {/*userMetadata.email*/}
            </h1>
            <button onClick={() => handleLogout()}>Logout</button>
          </>
        ) : (
          <>
            <h1>Please sign up or login</h1>
            <form onSubmit={(event) => handleLogin(event)}>
              <input
                type="email"
                name="email"
                required="required"
                placeholder="Enter your email"
              />
              <button type="submit">Send</button>
            </form>
          </>
        )}
      </StyledSectionContainer>
    </>
  );
};

export default UserLogin;
//USERMETADATA MODIFY

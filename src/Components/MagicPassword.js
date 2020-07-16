import React, { useEffect, useState } from "react";
import { Magic } from "magic-sdk";
import StyledLogin from "./Styled/StyledLogin";
import StyledSectionContainer from "./Styled/StyledSectionContainer";

const MagicPassword = () => {
  //Check if the user is logged in
  const [userLogged, setUserLogged] = useState(false);

  //API Key
  const magic = new Magic("pk_test_EA95F9581FBBBD21");

  //Starts the whole authentication proccess
  useEffect(() => {
    render();
  }, []);

  /* 3️⃣ Implement Render Function */
  const render = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    /* Show login form if user is not logged in */
    if (isLoggedIn) {
      /* Get user metadata including email */
      const userMetadata = await magic.user.getMetadata();
      setUserLogged(true);
    }
  };

  /* 4️⃣ Implement Login Handler */
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
    if (email) {
      /* One-liner login 🤯 */
      await magic.auth.loginWithMagicLink({ email });
      render();
    }
  };

  /* 5️⃣ Implement Logout Handler */
  const handleLogout = async () => {
    await magic.user.logout();
    render();
    setUserLogged(false);
  };

  return (
    <>
      <StyledSectionContainer>
        {userLogged ? (
          <StyledLogin>
            <h1>
              Current user:{"Usuario 1"}
              {/*userMetadata.email*/}
            </h1>
            <button onClick={() => handleLogout()}>Logout</button>
          </StyledLogin>
        ) : (
          <StyledLogin>
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
          </StyledLogin>
        )}
      </StyledSectionContainer>
    </>
  );
};

export default MagicPassword;

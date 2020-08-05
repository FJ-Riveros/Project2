import React from "react";

const Register = () => {
  const createUser = (event) => {
    console.log(event.target);
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(event) => createUser(event)}>
        <input placeholder="Enter your username" />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email"
        />
        <input placeholder="Enter your age"></input>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Register;

import React from "react";

const Register = () => {
  const createUser = (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
    const userName = new FormData(e.target).get("username");
    const age = new FormData(e.target).get("age");
  };

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(event) => createUser(event)}>
        <input
          placeholder="Enter your username"
          name="username"
          required="required"
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email"
        />
        <input
          placeholder="Enter your age"
          name="age"
          required="required"
        ></input>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Register;

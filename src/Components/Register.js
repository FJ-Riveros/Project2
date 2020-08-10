import React, { useState } from "react";
import { registerUser, getUsers } from "../APICalls";
import { validateUserNameAlgorithm } from "../Utils";

const Register = (props) => {
  const [formdata, setFormData] = useState({
    username: "",
    email: "",
    age: "",
  });
  const createUser = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };

  const submitNewUser = (e) => {
    e.preventDefault();
    registerUser(formdata);
    props.history.push("/");
  };

  const usernameCheck = async () => {
    const usersDb = await getUsers();
    validateUserNameAlgorithm(usersDb, formdata)
      ? console.log("The username already exists")
      : console.log("Correct");
  };
  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(event) => submitNewUser(event)}>
        <input
          placeholder="Enter your username"
          name="username"
          required="required"
          onChange={createUser}
          onPointerOut={usernameCheck}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter your email"
          onChange={createUser}
        />
        <input
          placeholder="Enter your age"
          name="age"
          required="required"
          onChange={createUser}
        ></input>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Register;

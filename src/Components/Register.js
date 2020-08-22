import React, { useState } from "react";
import { registerUser, getUsers } from "../APICalls";
import { validateUserNameAlgorithm, validateEmailAlgorithm } from "../Utils";

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
    if (formdata.username.length > 3 && formdata.username.length <= 14) {
      validateUserNameAlgorithm(usersDb, formdata)
        ? console.log("The username already exists")
        : console.log("Correct");
    } else {
      console.log("The username must contain between 3 and 14 characters");
    }
  };

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  const emailCheck = async () => {
    const usersDb = await getUsers();
    if (formdata.email.length !== 0) {
      if (validateEmail(formdata.email) === true) {
        validateEmailAlgorithm(usersDb, formdata)
          ? console.log("The email already exists")
          : console.log("Correct");
      } else {
        console.log("Funciona");
      }
    }
  };

  const ageCheck = () => {
    if (formdata.age > 0 && formdata.age <= 120) {
      console.log("Edad correcta");
    } else {
      console.log("Edad incorrecta");
    }
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
          onPointerOut={emailCheck}
        />
        <input
          placeholder="Enter your age"
          name="age"
          required="required"
          onChange={createUser}
          onPointerOut={ageCheck}
        ></input>
        <button type="submit">Send</button>
      </form>
    </>
  );
};

export default Register;

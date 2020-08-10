import React, { useState } from "react";
import { registerUser } from "../APICalls";

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
    // fetch(`${process.env.REACT_APP_BACKEND_URL}/adduser`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formdata),
    // }).then((response) => {
    //   console.log(response);
    //   props.history.push("/");
    // });
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

import React, { useRef } from "react";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import LockRoundedIcon from "@mui/icons-material/LockRounded";

import "./LogIn.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

  const submitButton = () => {
    fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify({
        username: email.current.value,
        password: password.current.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        if(user?.length) window.alert('Log in Success ...');
        else window.alert('Log in Failed ...');
      });
  };

  return (
    <Form>
      <Form.Label htmlFor="basic-url">Email/Username</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          <AccountCircleOutlinedIcon />
        </InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder="Enter Email/Username"
          ref={email}
        />
      </InputGroup>

      <Form.Label htmlFor="basic-url">Password</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          <LockRoundedIcon />
        </InputGroup.Text>
        <Form.Control
          id="basic-url"
          aria-describedby="basic-addon3"
          placeholder="Enter password"
          type="password"
          ref={password}
        />
      </InputGroup>
      <div className="submit-button">
        <Button variant="primary" type="button" onClick={submitButton}>
          <ArrowForwardIosRoundedIcon />
        </Button>
      </div>
    </Form>
  );
};

export default Login;

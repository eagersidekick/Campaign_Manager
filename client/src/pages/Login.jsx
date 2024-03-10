// imports
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // apollo hook useMutation to pass the
  // LOGIN_USER mutation for graphql

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if the form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      // Store the token
      Auth.login(data.login.token);
      console.log(data);
    } catch (e) {
      console.error(e);
      setShowAlert(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="content">
      <div className="section">
        <h1 className="title has-text-centered">Log In</h1>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="section">
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your login credentials!
          </Alert>
          <Form.Group>
            <Form.Label htmlFor="email" className="subtitle">Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your email"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
              className="input"
            />

          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password" className="subtitle">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
              className="input"
            />

          </Form.Group>
          <Button
            disabled={!(userFormData.email && userFormData.password)}
            type="submit"
            variant="success"
            className="button"
          >
            Submit
          </Button>
          {error && <div>Login failed</div>}
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;


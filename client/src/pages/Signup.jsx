import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
// import hooks for mutations and our mutations
import { useMutation } from "@apollo/react-hooks";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  console.log(userFormData);
  // set state for form validation
  const [validated] = useState(false);
  // using the apollo hook  useMutation pass the
  // ADD_USER mutation in order to talk to graphql
  // addUser will hold the output and error the error

  const [addUser, { error }] = useMutation(ADD_USER);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (error) {
      console.log("something went wrong!");
      console.log(error);
    }

    // use try/catch instead of promises to handle errors
    try {
      // execute addUser mutation and pass in variable data from form
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      Auth.login(data.addUser.token);
      console.log(data);
    } catch (err) {
      console.error(err);
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
        <h1 className="title has-text-centered">Sign Up</h1>
        {/* This is needed for the validation functionality above */}
        <Form noValidate validated={validated} onSubmit={handleFormSubmit} className="section">
          {/* show alert if server response is bad */}
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant="danger"
          >
            Something went wrong with your signup!
          </Alert>

          <Form.Group>
            <Form.Label htmlFor="username" className="subtitle">Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
              className="input"
            />
            <Form.Control.Feedback type="invalid" className="help is-danger">
            <ion-icon name="alert-circle-outline"></ion-icon> Username is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email" className="subtitle">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your email address"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
              className="input"
            />
            <Form.Control.Feedback type="invalid" className="help is-danger">
            <ion-icon name="alert-circle-outline"></ion-icon> Email is required!
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid" className="help is-danger">
            <ion-icon name="alert-circle-outline"></ion-icon> Password is required!
            </Form.Control.Feedback>
          </Form.Group>
          <Button
            disabled={
              !(
                userFormData.username &&
                userFormData.email &&
                userFormData.password
              )
            }
            type="submit"
            variant="success"
            className="button"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
import { useState } from "react";

import FormInput from "../form-input/from-input";
import Button from "../button/button";
import ValidatePassword from "../../helpers/validates-password";

import {
  auth,
  createAUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  updateUserProfile,
} from "../../utils/firebase.config";

import { SignUpContainer } from "./sign-up.styles";

const defaultFormData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormData);
  const { displayName, email, password, confirmPassword } = formFields;
  const [errorMessage, setErrorMessage] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const error = ValidatePassword(password, confirmPassword);
    if (error) {
      setErrorMessage(error);
      return;
    }

    try {
      const { user } = await createAUserWithEmailAndPassword(
        email,
        password,
        auth
      );
      updateUserProfile({ displayName: formFields.displayName });
      console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don&apos;t have an account?</h2>
      <span>Sign up here</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Full Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          label="Enter email"
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Enter password"
          type="password"
          name="password"
          value={password}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          required
          onChange={handleChange}
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

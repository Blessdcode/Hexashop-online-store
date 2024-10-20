import { useState } from "react";

import { SignUpContainer } from "./sign-in-styles";
import FormInput from "../form-input/from-input";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

import {
  signInAUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.config";

const defaultFormData = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormData);
  const { email, password } = formFields;
  const [errorMessage, setErrorMessage] = useState("");

  const resetFormFields = () => {
    setFormFields(defaultFormData);
  };

 

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAUserWithEmailAndPassword(email, password);
      resetFormFields();
      console.log("loggin successfully!");
    } catch (error) {
       if (error.code === "auth/invalid-login-credentials") {
        setTimeout(() => {
          setErrorMessage("Incorrect password");
        }, 3000); 
        return ;
       }
      console.log("user sign in failed", error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Enter email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Enter password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <Button type="submit">Sign In</Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          type="button"
          onClick={signInWithGoogle}>
          Continue with Google
        </Button>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;

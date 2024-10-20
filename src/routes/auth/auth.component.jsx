import SignUpForm from "../../components/sign-up-form/sign-up.form";
import SignInForm from "../../components/sign-in-form/sign-in.form";

import { AuthComponent,LogoContainer } from "./ath.styles";

import { logo } from "../../assets";

const Authentication = () => {
  return (
    <>
      <LogoContainer to="/">
        <img src={logo} alt="image" />
      </LogoContainer>
      <AuthComponent>
        <SignUpForm />
        <SignInForm />
      </AuthComponent>
    </>
  );
};

export default Authentication;

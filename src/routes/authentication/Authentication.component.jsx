import { SignUpForm } from "../../components/sign-up-form/SignUp-form.component";
import { SignInForm } from "../../components/sign-in-form/SignIn-form.component";
import "./Authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;

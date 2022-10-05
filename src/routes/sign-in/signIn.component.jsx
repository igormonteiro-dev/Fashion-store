import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components/sign-up-form/SignUp-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    // user = response
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign-in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;

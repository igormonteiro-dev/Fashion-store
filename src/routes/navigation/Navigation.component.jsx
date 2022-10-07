import { Outlet, Link } from "react-router-dom";
import "./Navigation.styles.scss";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AuthContext } from "../../context/Auth.context";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>
            <Logo className="logo" />
          </div>
          <div className="title">Casa Björn</div>
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      {/* Show the content from here */}
      <Outlet />
    </>
  );
};

export default Navigation;

import { Outlet, Link } from "react-router-dom";
import "./Navigation.styles.scss";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Navigation = () => {
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
          <Link className="nav-link" to="/sign-in">
            SIGN-IN
          </Link>
        </div>
      </div>
      {/* Show the content from here */}
      <Outlet />
    </>
  );
};

export default Navigation;

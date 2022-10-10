import { Outlet, Link } from "react-router-dom";
import "./Navigation.styles.scss";

import { CartIcon } from "../../components/cart-icon/Cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";

import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import { AuthContext } from "../../context/Auth.context";
import { CartContext, CartProvider } from "../../context/Cart.context";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <Link className="" to="/">
            <div>
              <Logo className="logo" />
              <div className="title">Casa Björn</div>
            </div>
          </Link>
        </div>

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      {/* Show the content from here */}
      <Outlet />
    </>
  );
};

export default Navigation;

import "./CartDropdown.styles.scss";

import Button from "../button/Button.component";
import { CartItem } from "../cart-item/ CartItem.component";
import { useContext } from "react";

import { CartContext } from "../../context/Cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goTocheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem hey={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goTocheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

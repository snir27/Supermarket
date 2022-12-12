import "../styles/NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <Link style={{ textDecoration: "none" }} to="/">
          <h1>Supermarket</h1>
        </Link>
      </div>
      {/* links */}
      <ul className="navbar__links">
          <>
            <li>
              <Link to="/cart" className="cart_link">
                {/* Icon */}
                <i className="fas fa-cart-plus"></i>
                <span>
                  Cart <span className="cartlogo__badge">{getCartCount()}</span>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/">Shop</Link>
            </li>
          </>

      </ul>
    </nav>
  );
};

export default NavBar;

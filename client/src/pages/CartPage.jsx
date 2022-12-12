import "../styles/CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// Componnents
import CartItem from "../components/CartItem";

// Actions
import {
  addToCart,
  removeFromCart,
  sendCartDataToDB,
} from "../redux/actions/cartActions";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
      navigate("/cart");
  }, [navigate, dispatch, cartItems]);


  useEffect(() => {
    if (!cartItems) {
      navigate("/");
    }
  }, [cartItems, navigate, dispatch]);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const submitCart = () => {
    dispatch(sendCartDataToDB(cartItems, getCartSubTotal()));
  };

  return (
    <>
      <div className="cartpage">
        <div className="cartpage__left">
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>
        <div className="cartpage__right">
          <div className="cartpage__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button
              type="button"
              onClick={submitCart}
              disabled={cartItems.length === 0}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;

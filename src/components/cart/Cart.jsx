import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "./cart-item/CartItem";
import "./Cart-style.css";
// import location from "../images/location.png";
// import check from "../images/check.png";
// import cancel from "../images/cancel.png";

const Cart = () => {
  const { cartProducts, totalQuantities, totalPrice } = useSelector(
    (state) => state.cartReducer
  );

  const [pin, setPin] = useState("");
  const [isPinEntered, setIsPinEntered] = useState(false);
  console.log(totalQuantities);
  return (
    <div className="container-z">
      <div className="row-y">
        <div className="column1">
          <div className="row-inner">
            <div className="my-cart">My Cart ({cartProducts.length})</div>
            <div className="add-div">
              <div className="add-heading">
                <div>{/* <img src={location} alt="" /> */}</div>
                <div>Deliver to</div>
              </div>
              <div className="address">
                {isPinEntered ? (
                  <div className="inner-add">
                    <div className="pin">
                      {pin}
                      {/* <img src={pin.length === 6 ? check : cancel} alt="" /> */}
                    </div>
                    <div>
                      <button
                        onClick={(e) => {
                          setIsPinEntered(!isPinEntered);
                        }}
                      >
                        Change
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="form">
                    <div className="input-div">
                      <input
                        type="text"
                        style={{ border: "1px solid grey" }}
                        onChange={(e) => {
                          setPin(e.target.value);
                        }}
                      />
                    </div>
                    <div className="check-btn">
                      <button
                        onClick={(e) => {
                          setIsPinEntered(!isPinEntered);
                        }}
                      >
                        Check
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="items">
            <div className="item-row">
              {cartProducts.length > 0 ? (
                <>
                  {cartProducts.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </>
              ) : (
                <div className="empty">Your cart is empty!</div>
              )}
            </div>
          </div>
        </div>

        {cartProducts.length > 0 ? (
          <div className="column2">
            <span className="price-heading">Price Details</span>
            <div className="desc-div">
              <div className="price-div">
                <div className="inner-row">
                  <div>Price ({cartProducts.length} items)</div>
                  <span>₹ {totalPrice}</span>
                </div>
              </div>
              <div className="discount-div">
                <div className="inner-row">
                  <div>Discount</div>
                  <span>-₹0</span>
                </div>
              </div>
              <div className="delivery-div">
                <div className="inner-row">
                  <div>Delivery Charges</div>
                  <span>FREE</span>
                </div>
              </div>
              <div className="totalprice-div">
                <div className="inner-row">
                  <div>Total Amount</div>
                  <span>₹ {totalPrice}</span>
                </div>
              </div>
              <div className="place-order-btn">
                <a href="/">
                  <div className="btn">Place Order</div>
                </a>
              </div>
              <div className="savings">You will save ₹0 on this order</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;

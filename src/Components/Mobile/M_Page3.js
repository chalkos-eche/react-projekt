// 장바구니 / order 페이지
import React from "react";

const M_Page3 = () => {
  return (
    <>
      <div>2 itmes in Cart</div>
      <div>
        Order
        <div>
          <img src="" alt="" />
          <h2>order item title</h2>
          <p>price</p>
          <button>-</button>
          <p>amount</p>
          <button>+</button>
          <button>delete</button>
        </div>
        <h2>Order instructions</h2>
        <input type="text" value="Order instructin" />
        <h1>Total</h1>
        <p>Total price</p>
        <button>check-out</button>
        <button>back to menu</button>
      </div>
    </>
  );
};

export default M_Page3;

import React from "react";

function Orders() {
  return (
    <div className="Orders">
      <div className="Head">
        <h1>My Orders</h1>
        <h4>View all Your pending orders and delivered Orders.</h4>
      </div>
      <hr />
      <div className="Content">
        <div className="Row">
          <div className="Order">
            <img src="https://images-eu.ssl-images-amazon.com/images/I/51Yer%2BqF6dL._SY90_.jpg"></img>
            <div className="titles">
              <h2>Title</h2>
              <h5>Description</h5>
              <h2>Rs. 5000</h2>
            </div>
          </div>
          <div className="date">30 August, 2021</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;

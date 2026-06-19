import React from "react";
import Navbar from "../components/Navbar";

function CustomerDashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2 className="text-success">
          Customer Dashboard
        </h2>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h3>🛍️</h3>
                <h5>Browse Products</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h3>🛒</h3>
                <h5>My Cart</h5>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body text-center">
                <h3>📋</h3>
                <h5>My Orders</h5>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default CustomerDashboard;
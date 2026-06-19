import React from "react";
import Navbar from "../components/Navbar";

function AdminDashboard() {

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="text-center mb-5">

          <h1 className="text-danger fw-bold">
            Admin Dashboard
          </h1>

          <p className="text-muted">
            Manage Users, Products and Orders
          </p>

        </div>

        <div className="row">

          <div className="col-md-4">

            <div className="card shadow p-4 text-center">

              <h1>👤</h1>

              <h4>Users</h4>

              <a
                href="/users"
                className="btn btn-primary"
              >
                View Users
              </a>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow p-4 text-center">

              <h1>📦</h1>

              <h4>Products</h4>

              <a
                href="/products"
                className="btn btn-success"
              >
                View Products
              </a>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow p-4 text-center">

              <h1>🛒</h1>

              <h4>Orders</h4>
<a
  href="/users"
  className="btn btn-primary"
>
  View Users
</a>
              <a
                href="/orders"
                className="btn btn-warning"
              >
                View Orders
              </a>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;
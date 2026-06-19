import React from "react";
import translations from "../translations";

function Navbar() {

  const role =
    localStorage.getItem("role");

  const lang =
    localStorage.getItem("language") || "en";

  const t = translations[lang];

  const logout = () => {

    localStorage.clear();

    window.location.href =
      "/login";
  };

  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">

      <div className="container">

        <a
          className="navbar-brand fw-bold fs-3"
          href="/"
        >
          🌾 AgriDirect
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item">
              <a
                className="nav-link"
                href="/"
              >
                {t.home}
              </a>
            </li>

            {role === "CUSTOMER" && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/products"
                  >
                    {t.products}
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/cart"
                  >
                    {t.cart} 🛒
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/orders"
                  >
                    {t.orders} 📦
                  </a>
                </li>
              </>
            )}

            {role === "FARMER" && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/products"
                  >
                    {t.products}
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/add-product"
                  >
                    {t.addProduct  }
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/orders"
                  >
                    {t.orders} 📦
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/farmer-dashboard"
                  >
                    {t.dashboard} 📊
                  </a>
                </li>
              </>
            )}

            {role === "ADMIN" && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/users"
                  >
                    Users 👤
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/products"
                  >
                    {t.products}
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/orders"
                  >
                    {t.orders} 📦
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/profile"
                  >
                    Profile 👤
                  </a>
                </li>

                <li className="nav-item">
                 <a
  className="nav-link"
  href="/farmer-dashboard"
>
  {t.dashboard} 📊
</a>
                </li>
              </>
            )}

            {!role && (
              <>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/login"
                  >
                    {t.login}
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="btn btn-warning ms-2"
                    href="/register"
                  >
                    Register
                  </a>
                </li>
              </>
            )}
<li className="nav-item">
  <a
    className="nav-link"
    href="/prediction"
  >
    {t.pricePredictor} 📈
  </a>
</li>
            <li className="nav-item ms-3">
              <select
                className="form-select"
                value={lang}
                onChange={(e) => {

                  localStorage.setItem(
                    "language",
                    e.target.value
                  );

                  window.location.reload();
                }}
              >
                <option value="en">
                   English
                </option>

                <option value="hi">
                   हिन्दी
                </option>

                <option value="kn">
                ಕನ್ನಡ
                </option>
              </select>
            </li>

            {role && (
              <li className="nav-item ms-3">

                <button
                  className="btn btn-danger"
                  onClick={logout}
                >
                  Logout
                </button>

              </li>
            )}

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
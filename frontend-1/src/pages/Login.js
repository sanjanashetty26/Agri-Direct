import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getTranslation }
from "../utils/language";



function Login() {
const t = getTranslation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const login = async () => {

    try {

      const response = await API.post(
        "/users/login",
        loginData
      );

      const role = response.data;

      if (
        role === "Invalid Password" ||
        role === "User Not Found"
      ) {

        alert(role);
        return;

      }

      localStorage.setItem(
        "loggedIn",
        "true"
      );

      localStorage.setItem(
        "role",
        role
      );

      alert("Login Successful");

      if (role === "ADMIN") {

        window.location.href =
          "/admin-dashboard";

      } else if (
        role === "FARMER"
      ) {

        window.location.href =
          "/farmer-dashboard";

      } else {

        window.location.href =
          "/products";

      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }
  };

  return (
    <>
      <Navbar />

      <div
        className="d-flex justify-content-center align-items-center"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(to right, #11998e, #38ef7d)"
        }}
      >

        <div
          className="card shadow-lg p-5"
          style={{
            width: "450px",
            borderRadius: "20px"
          }}
        >

         <h2 className="text-center text-success mb-4">
  {t.welcome}
</h2>

          <input
            type="email"
            className="form-control mb-3"
            placeholder={t.emailAddress}
            value={loginData.email}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: e.target.value
              })
            }
          />

          <input
            type="password"
            className="form-control mb-4"
            placeholder={t.password}
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value
              })
            }
          />

          <button
  className="btn btn-success w-100"
  onClick={login}
>
  {t.login}
</button>

          <p className="text-center mt-3">

        
           {t.newUser}
            <a
              href="/register"
              className="ms-2"
            >
              {t.register}
            </a>

          </p>

        </div>

      </div>
    </>
  );
}

export default Login;
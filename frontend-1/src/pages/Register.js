import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getTranslation } from "../utils/language";
function Register() {
  const t = getTranslation();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "CUSTOMER"
  });

  const register = async () => {

    try {

      await API.post("/users/register", user);

      alert("Registration Successful");

      window.location.href = "/login";

    } catch (error) {

      alert("Registration Failed");

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
            "linear-gradient(to right, #56ab2f, #a8e063)"
        }}
      >

        <div
          className="card shadow-lg p-5"
          style={{
            width: "450px",
            borderRadius: "20px"
          }}
        >

         <h2>{t.createAccount}</h2>

          <input
            type="text"
            className="form-control mb-3"
           placeholder={t.fullName}
            onChange={(e) =>
              setUser({
                ...user,
                name: e.target.value
              })
            }
          />

          <input
            type="email"
            className="form-control mb-3"
           placeholder={t.emailAddress}
            onChange={(e) =>
              setUser({
                ...user,
                email: e.target.value
              })
            }
          />

          <input
            type="password"
            className="form-control mb-3"
         placeholder={t.password}
            onChange={(e) =>
              setUser({
                ...user,
                password: e.target.value
              })
            }
          />

          <select
            className="form-select mb-4"
            onChange={(e) =>
              setUser({
                ...user,
                role: e.target.value
              })
            }
          >
          <option value="CUSTOMER">
  {t.customer}
</option>

            <option value="FARMER">
             {t.farmer} 
            </option>
          </select>

         <button
  className="btn btn-success w-100 text-white fw-bold"
  onClick={register}
  style={{
    height: "50px",
    fontSize: "20px"
  }}
>
  {t.register}
</button>

          <p className="text-center mt-3">

           {t.alreadyAccount}

            <a
              href="/login"
              className="ms-2"
            >
              Login
            </a>

          </p>

        </div>

      </div>
    </>
  );
}

export default Register;
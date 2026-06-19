import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getTranslation } from "../utils/language";

function Home() {

  const t = getTranslation();

  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      {/* Hero Section */}

      <div
        className="text-white text-center d-flex align-items-center justify-content-center"
        style={{
          height: "90vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "40px",
            borderRadius: "15px"
          }}
        >

          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold"
            }}
          >
            🌾 AgriDirect
          </h1>

          <h3>
            {t.homeTitle}
          </h3>

          <p className="mt-3">
            {t.homeSubtitle}
          </p>

          <button
            className="btn btn-success btn-lg m-2"
            onClick={() => navigate("/products")}
          >
            {t.browseProducts}
          </button>

          <button
            className="btn btn-warning btn-lg m-2"
            onClick={() => navigate("/register")}
          >
            {t.joinNow}
          </button>

        </div>

      </div>

      {/* Statistics Section */}

      <div className="container mt-5">

        <div className="row text-center">

          <div className="col-md-4">

            <div className="card shadow p-4">

              <h1>500+</h1>

              <h5>{t.farmers}</h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow p-4">

              <h1>2000+</h1>

              <h5>{t.customers}</h5>

            </div>

          </div>

          <div className="col-md-4">

            <div className="card shadow p-4">

              <h1>10000+</h1>

              <h5>{t.orders}</h5>

            </div>

          </div>

        </div>

      </div>

      {/* About Section */}

      <div className="container mt-5 mb-5">

        <div className="card shadow p-5">

          <h2 className="text-success text-center mb-4">
            {t.whyChoose}
          </h2>

          <p className="text-center">
            {t.aboutText}
          </p>

          <div className="row text-center mt-4">

            <div className="col-md-4">

              <h3>🌱 {t.freshProduce}</h3>

              <p>{t.freshProduceDesc}</p>

            </div>

            <div className="col-md-4">

              <h3>💰 {t.fairPricing}</h3>

              <p>{t.fairPricingDesc}</p>

            </div>

            <div className="col-md-4">

              <h3>🚚 {t.fastDelivery}</h3>

              <p>{t.fastDeliveryDesc}</p>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
}

export default Home;
import React, { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getTranslation } from "../utils/language";

function PricePrediction() {

  const t = getTranslation();

  const [data, setData] = useState({
    crop: "Tomato",
    month: 1,
    previousPrice: "",
    currentPrice: ""
  });

  const [result, setResult] = useState(null);


  const predictPrice = async () => {

    try {

      const response = await API.post(
        "/prediction",
        data
      );

      setResult(response.data);

    }
    catch (error) {

      console.log(error);

      alert("Prediction Failed");

    }
  };


  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="card shadow p-5">

          <h2 className="text-success text-center">
            🤖 {t.pricePredictor}
          </h2>

          <hr />

          {/* Crop */}

          <label className="form-label">
            {t.crop}
          </label>

          <select
            className="form-select mb-3"
            value={data.crop}
            onChange={(e) =>
              setData({
                ...data,
                crop: e.target.value
              })
            }
          >
            <option>Tomato</option>
            <option>Onion</option>
            <option>Potato</option>
            <option>Beans</option>
            <option>Rice</option>
            <option>Carrot</option>
            <option>Cabbage</option>
             <option>Cauliflower</option>
              <option>Brinjal</option>
               <option>GreenChilli</option>
                <option>Okra</option>
                 <option>Cucumber</option>
                  <option>Pumpkin</option>
                   <option>Garlic</option>
                    <option>Ginger</option>
                     <option>BitterGourd</option>
          </select>


          {/* Month */}

          <label className="form-label">
            {t.month}
          </label>

          <input
            type="number"
            min="1"
            max="12"
            className="form-control mb-3"
            value={data.month}
            onChange={(e) =>
              setData({
                ...data,
                month: Number(e.target.value)
              })
            }
          />


          {/* Previous Price */}

          <label className="form-label">
            {t.previousPrice}
          </label>

          <input
            type="number"
            className="form-control mb-3"
            value={data.previousPrice}
            placeholder={t.enterPreviousPrice}
            onChange={(e) =>
              setData({
                ...data,
                previousPrice: Number(e.target.value)
              })
            }
          />


          {/* Current Price */}

          <label className="form-label">
            {t.currentPrice}
          </label>

          <input
            type="number"
            className="form-control mb-4"
            value={data.currentPrice}
            placeholder={t.enterCurrentPrice}
            onChange={(e) =>
              setData({
                ...data,
                currentPrice: Number(e.target.value)
              })
            }
          />


          <button
            className="btn btn-success w-100"
            onClick={predictPrice}
          >
            📈 {t.predict}
          </button>


          {
            result && (

              <div className="card mt-4 p-3 bg-light">

                <h4 className="text-success">
                  {t.predictedPrice}
                </h4>

                <h2>
                  ₹{result.predictedPrice}
                </h2>

                <h5>
                  {t.trend}: {result.trend}
                </h5>

              </div>

            )
          }

        </div>

      </div>
    </>
  );
}

export default PricePrediction;
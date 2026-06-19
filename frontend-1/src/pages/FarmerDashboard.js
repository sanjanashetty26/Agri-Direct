import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getTranslation }
from "../utils/language";




function FarmerDashboard() {
const t = getTranslation();
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    revenue: 0,
    pendingOrders: 0,
    deliveredOrders: 0
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const response =
        await API.get("/dashboard");

      setStats(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h1>
  {t.dashboard}
</h1>

        <div className="row g-4">

          {/* Total Products */}

          <div className="col-md-4">

            <div className="card shadow border-0 bg-success text-white">

              <div className="card-body text-center">

                <h5>{t.totalProducts}</h5>

                <h1>{stats.totalProducts}</h1>

              </div>

            </div>

          </div>

          {/* Total Orders */}

          <div className="col-md-4">

            <div className="card shadow border-0 bg-primary text-white">

              <div className="card-body text-center">

                <h5>{t.totalOrders}</h5>

                <h1>{stats.totalOrders}</h1>

              </div>

            </div>

          </div>

          {/* Revenue */}

          <div className="col-md-4">

            <div className="card shadow border-0 bg-warning text-dark">

              <div className="card-body text-center">

                <h5>{t.revenue}</h5>

                <h1>
                  ₹{stats.revenue}
                </h1>

              </div>

            </div>

          </div>

          {/* Pending Orders */}

          <div className="col-md-6">

            <div className="card shadow border-0 bg-info text-white">

              <div className="card-body text-center">

                <h5>{t.pendingOrders}</h5>

                <h1>
                  {stats.pendingOrders}
                </h1>

              </div>

            </div>

          </div>

          {/* Delivered Orders */}

          <div className="col-md-6">

            <div className="card shadow border-0 bg-dark text-white">

              <div className="card-body text-center">

                <h5>{t.deliveredOrders}</h5>

                <h1>
                  {stats.deliveredOrders}
                </h1>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default FarmerDashboard;
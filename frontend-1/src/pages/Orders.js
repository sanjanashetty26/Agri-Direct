import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getTranslation }
from "../utils/language";




function Orders() {
const t = getTranslation();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);
const loadOrders = async () => {
  try {

    const response = await API.get("/orders");

    console.log("FULL RESPONSE:", response);
    console.log("DATA:", response.data);

    setOrders(response.data);

  } catch (error) {

    console.log("ERROR:", error);

  }
};
  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await API.put(
        `/orders/${id}/status?status=${status}`
      );

      loadOrders();

    } catch (error) {

      console.log(error);

      alert("Status Update Failed");

    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="text-center mb-4">

        <h1 className="fw-bold text-success">
  {t.orderManagement}
</h1>

         <p className="text-muted">
  {t.trackOrders}
</p>

        </div>

        <table className="table table-bordered table-striped shadow">

          <thead className="table-success">

            <tr>
              <th>ID</th>
              <th>{t.customer}</th>
              <th>{t.product}</th>
              <th>{t.quantity}</th>
              <th>{t.amount}</th>
              <th>{t.status}</th>
            </tr>

          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customerName}</td>

                <td>{order.productName}</td>

                <td>{order.quantity}</td>

                <td>₹{order.totalAmount}</td>

                <td>

                  <select
                    className="form-select"
                    value={order.status || "Pending"}
                    onChange={(e) =>
                      updateStatus(
                        order.id,
                        e.target.value
                      )
                    }
                  >

                    <option value="Pending">
                     { t.pending}
                    </option>

                    <option value="Packed">
                     { t.packed}
                    </option>

                    <option value="Shipped">
                    {  t.shipped}
                    </option>

                    <option value="Delivered">
                      {t.delivered}
                    </option>

                  </select>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Orders;
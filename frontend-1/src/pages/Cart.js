import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getTranslation } from "../utils/language";

function Cart() {

  const t = getTranslation();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {

      const response = await API.get("/cart");

      setCartItems(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const removeItem = async (id) => {
    try {

      await API.delete(`/cart/${id}`);

      loadCart();

    } catch (error) {

      console.log(error);

    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + (item.price * item.quantity),
    0
  );

  const placeOrder = async () => {

    try {

      for (const item of cartItems) {

        await API.post("/orders", {
          customerName: "Customer",
          productName: item.productName,
          quantity: item.quantity,
          totalAmount: item.price * item.quantity
        });

      }

      await API.delete("/cart");

      alert(t.orderPlacedSuccessfully);

      loadCart();

    } catch (error) {

      console.log(error);

      alert(t.orderFailed);

    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2 className="text-success mb-4">
          {t.myCart}
        </h2>

        {cartItems.length === 0 ? (

          <div className="alert alert-info">
            {t.cartEmpty}
          </div>

        ) : (

          <>
            <table className="table table-bordered table-striped">

              <thead className="table-success">

                <tr>
                  <th>{t.product}</th>
                  <th>{t.price}</th>
                  <th>{t.quantityText}</th>
                  <th>{t.total}</th>
                  <th>{t.action}</th>
                </tr>

              </thead>

              <tbody>

                {cartItems.map((item) => (

                  <tr key={item.id}>

                    <td>{item.productName}</td>

                    <td>₹{item.price}</td>

                    <td>{item.quantity}</td>

                    <td>
                      ₹{item.price * item.quantity}
                    </td>

                    <td>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        {t.remove}
                      </button>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

            <div className="text-end">

              <h4 className="text-success">
                {t.totalAmount} : ₹{totalAmount}
              </h4>

              <button
                className="btn btn-success mt-2"
                onClick={placeOrder}
              >
                {t.placeOrder}
              </button>

            </div>

          </>
        )}

      </div>
    </>
  );
}

export default Cart;
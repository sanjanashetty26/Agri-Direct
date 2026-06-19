import React, { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import { getTranslation } from "../utils/language";

function AddProduct() {

  const t = getTranslation();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    rating: 4.5
  });

  const [image, setImage] = useState(null);

  const addProduct = async () => {

    try {

      let imageName = "";

      if (image) {

        const formData = new FormData();

        formData.append(
          "file",
          image
        );

        const uploadResponse =
          await API.post(
            "/upload",
            formData,
            {
              headers: {
                "Content-Type":
                  "multipart/form-data"
              }
            }
          );

        imageName =
          uploadResponse.data;
      }

      await API.post(
        "/products",
        {
          ...product,
          imageName
        }
      );

      alert("Product Added Successfully");

      setProduct({
        name: "",
        category: "",
        price: "",
        quantity: "",
        rating: 4.5
      });

      setImage(null);

    } catch (error) {

      console.log(error);

      alert("Failed To Add Product");

    }
  };

  return (
    <>
      <Navbar />

      <div
        className="container mt-5"
        style={{ maxWidth: "900px" }}
      >

        <div className="card shadow p-4">

          <h2 className="text-center text-success mb-4">
            {t.addNewProduct}
          </h2>

          <input
            type="text"
            className="form-control mb-3"
            placeholder={t.productName}
            value={product.name}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value
              })
            }
          />

          <select
            className="form-select mb-3"
            value={product.category}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.target.value
              })
            }
          >
            <option value="">
              {t.selectCategory}
            </option>

            <option value="Vegetable">
              {t.vegetable}
            </option>

            <option value="Fruit">
              {t.fruit}
            </option>

            <option value="Grain">
              {t.grain}
            </option>

            <option value="Dairy">
              {t.dairy}
            </option>

          </select>

          <input
            type="number"
            className="form-control mb-3"
            placeholder={t.price}
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value
              })
            }
          />

          <input
            type="number"
            className="form-control mb-3"
            placeholder={t.quantity}
            value={product.quantity}
            onChange={(e) =>
              setProduct({
                ...product,
                quantity: e.target.value
              })
            }
          />

          <input
            type="file"
            className="form-control mb-3"
            onChange={(e) =>
              setImage(
                e.target.files[0]
              )
            }
          />

          <input
            type="number"
            step="0.1"
            min="1"
            max="5"
            className="form-control mb-4"
            placeholder={t.rating}
            value={product.rating}
            onChange={(e) =>
              setProduct({
                ...product,
                rating: e.target.value
              })
            }
          />

          <button
            className="btn btn-success w-100"
            onClick={addProduct}
          >
            {t.addProduct}
          </button>

        </div>

      </div>
    </>
  );
}

export default AddProduct;
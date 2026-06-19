import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function EditProduct() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    imageUrl: ""
  });

  const loadProduct = useCallback(async () => {

    try {

      const response = await API.get("/products");

      const selectedProduct =
        response.data.find(
          p => p.id === parseInt(id)
        );

      if (selectedProduct) {
        setProduct(selectedProduct);
      }

    } catch (error) {

      console.log(error);

      alert("Failed To Load Product");

    }

  }, [id]);

  useEffect(() => {

    loadProduct();

  }, [loadProduct]);


  const updateProduct = async () => {

    try {

      await API.put(
        `/products/${id}`,
        product
      );

      alert("Product Updated Successfully");

      navigate("/products");

    } catch (error) {

      console.log(error);

      alert("Update Failed");

    }

  };


  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div
          className="card shadow p-4"
          style={{
            maxWidth: "700px",
            margin: "auto"
          }}
        >

          <h2 className="text-center text-success mb-4">
            Edit Product
          </h2>


          <input
            type="text"
            className="form-control mb-3"
            placeholder="Product Name"
            value={product.name || ""}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value
              })
            }
          />


          <input
            type="text"
            className="form-control mb-3"
            placeholder="Category"
            value={product.category || ""}
            onChange={(e) =>
              setProduct({
                ...product,
                category: e.target.value
              })
            }
          />


          <input
            type="number"
            className="form-control mb-3"
            placeholder="Price"
            value={product.price || ""}
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
            placeholder="Quantity"
            value={product.quantity || ""}
            onChange={(e) =>
              setProduct({
                ...product,
                quantity: e.target.value
              })
            }
          />


          <input
            type="text"
            className="form-control mb-4"
            placeholder="Image URL"
            value={product.imageUrl || ""}
            onChange={(e) =>
              setProduct({
                ...product,
                imageUrl: e.target.value
              })
            }
          />


          <button
            className="btn btn-success w-100"
            onClick={updateProduct}
          >
            Update Product
          </button>

        </div>

      </div>

    </>
  );
}

export default EditProduct;
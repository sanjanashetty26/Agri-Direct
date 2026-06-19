import React, { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function SearchProduct() {

  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);

  const search = async () => {

    const response = await API.get(
      `/products/search?keyword=${keyword}`
    );

    setProducts(response.data);
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2>Search Products</h2>

        <div className="input-group mb-3">

          <input
            className="form-control"
            placeholder="Search Product"
            onChange={(e) =>
              setKeyword(e.target.value)
            }
          />

          <button
            className="btn btn-success"
            onClick={search}
          >
            Search
          </button>

        </div>

        <div className="row">

          {products.map(product => (

            <div
              className="col-md-4"
              key={product.id}
            >
              <div className="card shadow mb-3">

                <div className="card-body">

                  <h5>{product.name}</h5>

                  <p>{product.description}</p>

                  <h6>
                    ₹{product.price}
                  </h6>

                </div>

              </div>
            </div>

          ))}

        </div>

      </div>
    </>
  );
}

export default SearchProduct;
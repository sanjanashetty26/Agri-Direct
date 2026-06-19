import React from "react";
import API from "../services/api";
import { getTranslation } from "../utils/language";

function ProductCard({ product }) {

  const t = getTranslation();

  const addToCart = async () => {
    try {

      await API.post("/cart", {
        productName: product.name,
        price: product.price,
        quantity: 1
      });

      alert(t.addedToCart || "Added To Cart");

    } catch (error) {

      console.log(error);

      alert(t.addToCartFailed || "Failed To Add To Cart");

    }
  };

  const deleteProduct = async () => {
    try {

      await API.delete(`/products/${product.id}`);

      alert(t.productDeleted || "Product Deleted");

      window.location.reload();

    } catch (error) {

      console.log(error);

      alert(t.deleteFailed || "Delete Failed");

    }
  };

  const translatedCategory =
    product.category === "Vegetable"
      ? t.vegetables
      : product.category === "Fruit"
      ? t.fruits
      : product.category === "Grain"
      ? t.grains
      : product.category === "Dairy"
      ? t.dairy
      : product.category;

  return (
    <div className="card shadow border-0 mb-4">

      <div className="row g-0">

        <div className="col-md-4">

          <img
            src={
              product.imageName
                ? `http://localhost:8080/images/${encodeURIComponent(product.imageName)}`
                : "https://via.placeholder.com/400"
            }
            alt={product.name}
            className="img-fluid rounded-start"
            style={{
              height: "350px",
              width: "100%",
              objectFit: "cover"
            }}
          />

        </div>

        <div className="col-md-8">

          <div className="card-body p-4">

            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "3rem"
              }}
            >
              {product.name}
            </h1>

            <span
              className="badge bg-success p-2 fs-6"
            >
              {translatedCategory}
            </span>

            <p
              className="text-muted mt-4"
              style={{
                fontSize: "18px",
                lineHeight: "1.8"
              }}
            >
              {product.description}
            </p>

            <hr />

            <div className="row text-center">

              <div className="col-md-6">

                <h5 className="text-muted">
                  {t.category}
                </h5>

                <h3>
                  {translatedCategory}
                </h3>

              </div>

              <div className="col-md-6">

                <h5 className="text-muted">
                  {t.available}
                </h5>

                <h3>
                  {product.quantity} Kg
                </h3>

              </div>

            </div>

            <hr />

            <div className="d-flex justify-content-between align-items-center flex-wrap">

              <div>

                <h1
                  className="fw-bold"
                  style={{
                    color: "#198754",
                    fontSize: "3rem"
                  }}
                >
                  ₹{product.price}
                </h1>

                <small className="text-muted">
                  {t.perKg}
                </small>

              </div>

              <div className="d-flex gap-3 align-items-center flex-wrap">

                <button
                  className="btn btn-primary rounded-pill px-4 py-2"
                  onClick={() =>
                    window.location.href =
                    `/edit-product/${product.id}`
                  }
                >
                  ✏ {t.edit}
                </button>

                <button
                  className="btn btn-outline-danger rounded-pill px-4 py-2"
                  onClick={deleteProduct}
                >
                  🗑 {t.delete}
                </button>

                {product.quantity > 0 ? (

                  <button
                    className="btn btn-success"
                    onClick={addToCart}
                  >
                    {t.addToCart}
                  </button>

                ) : (

                  <button
                    className="btn btn-danger"
                    disabled
                  >
                    {t.outOfStock}
                  </button>

                )}

                <h6 className="text-warning mb-0">
                  ⭐ {product.rating || 4.5}
                </h6>

                <h6 className="text-secondary mb-0">
                  {t.stock}: {product.quantity}
                </h6>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;
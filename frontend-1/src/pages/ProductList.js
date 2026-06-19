import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { getTranslation }
from "../utils/language";


function ProductList() {
  const t = getTranslation();
const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
const [category, setCategory] = useState("");
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {

    try {

      const response = await API.get("/products");

      setProducts(response.data);

    } catch(error) {

      console.log(error);

    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h2 className="text-success text-center mb-4">
         <h2 className="text-success text-center mb-4">
  {t.freshProducts}
</h2>
        </h2>
        <div className="row mb-4">

  <div className="col-md-6 mx-auto">

    <input
      type="text"
      className="form-control"
      placeholder={t.searchProducts}
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
    />

  </div>

</div>
<div className="text-center mb-4">

  <button
    className="btn btn-success m-1"
    onClick={() => setCategory("")}
  >
  {t.all}
  </button>

  <button
    className="btn btn-outline-success m-1"
    onClick={() => setCategory("Vegetable")}
  >
    {t.vegetables}
  </button>

  <button
    className="btn btn-outline-success m-1"
    onClick={() => setCategory("Fruit")}
  >
   { t.fruits}
  </button>

  <button
    className="btn btn-outline-success m-1"
    onClick={() => setCategory("Grain")}
  >
   { t.grains}
  </button>

  <button
    className="btn btn-outline-success m-1"
    onClick={() => setCategory("Dairy")}
  >
   { t.dairy}
  </button>

</div>
<div className="container-fluid px-4">

  {products
    .filter(product =>

      product.name
        ?.toLowerCase()
        .includes(search.toLowerCase())

      &&

      (
        category === ""
        ||
        product.category === category
      )

    )
    .map((product) => (

      <ProductCard
        key={product.id}
        product={product}
      />

    ))}

</div>

      </div>
    </>
  );
}

export default ProductList;
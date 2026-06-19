import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FarmerDashboard from "./pages/FarmerDashboard";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import SearchProduct from "./pages/SearchProduct";
import CustomerDashboard from "./pages/CustomerDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Ussers";
import EditProduct
from "./pages/EditProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import PricePrediction
from "./pages/PricePrediction";
function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />
        <Route
  path="/users"
  element={
    <ProtectedRoute>
      <Users />
    </ProtectedRoute>
  }
/>
<Route
  path="/prediction"
  element={<PricePrediction />}
/>
<Route
  path="/products"
  element={
    <ProtectedRoute>
      <ProductList />
    </ProtectedRoute>
  }
/>
<Route
  path="/edit-product/:id"
  element={
    <ProtectedRoute>
      <EditProduct />
    </ProtectedRoute>
  }
/>
<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  }
/>
<Route
  path="/orders"
  element={
    <ProtectedRoute>
      <Orders />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-dashboard"
  element={<AdminDashboard />}
/>
<Route
  path="/search"
  element={<SearchProduct />}
/>
        <Route
          path="/login"
          element={<Login />}
        />
<Route
  path="/farmer-dashboard"
  element={
    <ProtectedRoute>
      <FarmerDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/customer-dashboard"
  element={<CustomerDashboard />}
/>
<Route
  path="/products"
  element={<ProductList />}
/>
<Route
  path="/add-product"
  element={
    <ProtectedRoute>
      <AddProduct />
    </ProtectedRoute>
  }
/>
        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
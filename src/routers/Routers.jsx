import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../easeeSqueezyUser/pages/Home";
import About from "../easeeSqueezyUser/pages/About";
import Flavors from "../easeeSqueezyUser/pages/Flavors";
import Trade from "../easeeSqueezyUser/pages/Trade";
import News from "../easeeSqueezyUser/pages/News";
import Orders from "../easeeSqueezyUser/pages/Orders";
import Cart from "../easeeSqueezyUser/pages/Cart";
import Contact from "../easeeSqueezyUser/pages/Contact";
import Layout from "../easeeSqueezyUser/layouts/Layout";
import Login from "../easeeSqueezyUser/pages/Login";
import ForgotPassword from "../easeeSqueezyUser/pages/ForgotPassword";
import Register from "../easeeSqueezyUser/pages/Register";
import { AuthProvider } from "../easeeSqueezyUser/context/AuthContext";
import { CartProvider } from "../easeeSqueezyUser/context/CartContext";
import NotFound from "../easeeSqueezyUser/pages/NotFound";
// import PrivateRoute from "../easeeSqueezyUser/components/PrivateRoute";

// Admin pages
import AdminPrivateRoute from "../easeeSqueezyAdmin/context/AdminPrivateRoute";
import AdminPublicRoute from "../easeeSqueezyAdmin/context/AdminPublicRoute";
import AdminLayout from "../easeeSqueezyAdmin/layouts/AdminLayout";
import AdminLogin from "../easeeSqueezyAdmin/pages/AdminLogin";
import Dashboard from "../easeeSqueezyAdmin/pages/Dashboard";
import Filters from "../easeeSqueezyAdmin/pages/Filters";
import Categories from "../easeeSqueezyAdmin/pages/Categories";
import Products from "../easeeSqueezyAdmin/pages/Products";
import AddProduct from "../easeeSqueezyAdmin/pages/AddProduct";
import ProductDetail from "../easeeSqueezyUser/pages/ProductDetail";
import EditProduct from "../easeeSqueezyAdmin/pages/EditProduct";
import Feedback from "../easeeSqueezyUser/pages/Feedback";
import Payment from "../easeeSqueezyUser/pages/Payment";

const Routers = () => {
  return (
    <>
      <Router basename="/juice/">
        <AuthProvider>
          <CartProvider>
            <Routes>
              {/* Public routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="*" element={<NotFound />} /> */}

              {/* Private routes */}
              <Route
                path="/"
                element={
                  // <PrivateRoute>
                  <Layout />
                  // </PrivateRoute>
                }
              >
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="flavors" element={<Flavors />} />
                <Route path="trade" element={<Trade />} />
                <Route path="news" element={<News />} />
                <Route path="orders" element={<Orders />} />
                <Route path="cart" element={<Cart />} />
                <Route path="contact" element={<Contact />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="products/:id" element={<ProductDetail />} />
                <Route path="payment" element={<Payment />} />
              </Route>
            </Routes>
          </CartProvider>
        </AuthProvider>

        {/* Admin routers */}

        <Routes>
          <Route
            path="/admin/login"
            element={
              <AdminPublicRoute>
                <AdminLogin />
              </AdminPublicRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminPrivateRoute>
                <AdminLayout />
              </AdminPrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="filters" element={<Filters />} />
            <Route path="categories" element={<Categories />} />
            <Route path="products/add-product" element={<AddProduct />} />
            <Route path="products/:id" element={<EditProduct />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;

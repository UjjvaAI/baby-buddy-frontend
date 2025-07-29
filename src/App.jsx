import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Notes from "./components/Notes";
import PlaceOrder from "./components/PlaceOrder";
import SellerDashboard from "./components/SellerDashboard";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import UserDetails from "./pages/UserDetails";
import ThankYou from "./pages/ThankYou";
import AdminOrders from "./pages/AdminOrders";
import { Navigate } from "react-router-dom";
import EmailLinkSignIn from "./pages/EmailLinkSignIn";
import FinishSignIn from "./pages/finishSignIn";







 const user = JSON.parse(localStorage.getItem("user"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product/:slug" element={<ProductDetail />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
         <Route path="/" element={<EmailLinkSignIn />} />
        <Route path="/finishSignIn" element={<FinishSignIn />} />
       
       
       
       
        {/* ✅ Protected routes */}
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
  path="/user-details"
  element={
    <PrivateRoute>
      <UserDetails />
    </PrivateRoute>
  }
/>

        <Route
          path="orders"
          element={
            <PrivateRoute>
              <OrderHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="notes"
          element={
            <PrivateRoute>
              <Notes />
            </PrivateRoute>
          }
        />
        <Route
          path="order"
          element={
            <PrivateRoute>
              <PlaceOrder />
            </PrivateRoute>
          }
        />
       

<Route
  path="/admin/orders"
  element={
    user?.uid === "llBIqhEd4GW5ysxNxeOuXnbSAbc2" ? (
      <AdminOrders />
    ) : (
      <Navigate to="/" />
    )
  }
/>

      

        <Route path="seller-dashboard" element={<SellerDashboard />} />
      </Route>
    </Routes>
  );
};

export default App;

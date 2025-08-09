import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CartPage from "./pages/CartPage";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Notes from "./components/Notes";
import PlaceOrder from "./components/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import OrderHistory from "./pages/OrderHistory";
import UserDetails from "./pages/UserDetails";
import ThankYou from "./pages/ThankYou";
import AdminOrders from "./pages/AdminOrders";
import EmailLinkSignIn from "./pages/EmailLinkSignIn";
import FinishSignIn from "./pages/finishSignIn";
import ContactUs from "./pages/ContactUs";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UserOrders from "./pages/UserOrders";

const ADMIN_UID = "llBIqhEd4GW5ysxNxeOuXnbSAbc2";
const user = JSON.parse(localStorage.getItem("user"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product/:slug" element={<ProductDetail />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="shipping-policy" element={<ShippingPolicy />} />
        <Route path="terms" element={<TermsAndConditions />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="my-orders" element={<UserOrders />} />

        {/* Email sign-in */}
        <Route path="email-link-signin" element={<EmailLinkSignIn />} />
        <Route path="finish-signin" element={<FinishSignIn />} />

        {/* Protected routes */}
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="user-details"
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

        {/* Admin protected route */}
        <Route
          path="admin/orders"
          element={
            user?.uid === ADMIN_UID ? (
              <AdminOrders />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

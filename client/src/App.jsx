import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cancel from "./Cancel";
import Cart from "./pages/Cart/Cart";
import ChangePasword from "./ChangePasword";
import Layout from "./component/Layout";
import Detail from "./Detail";
import Favorite from "./Favorite";
import Home from "./Home";
import HomeAccount from "./HomeAccount";
import Order from "./Order";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import Products from "./Products";
import Profile from "./Profile";
import Shop from "./Shop";
import Context from "./ShopContext/Shopcontext";
import ShopDetails from "./ShopDetails";
import Sucess from "./Sucess";
import Register from "../src/pages/Register/Register"
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import NotVerified from "./pages/Not-verified/NotVerified"
import ResetPassword from "./pages/Reset-Password/ResetPassword";
import PasswordEmail from "./pages/Password-Email/PasswordEmail";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import Loading from "./component/Loading/Loading";


function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/setting" element={<ChangePasword />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shopdetails" element={<ShopDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<HomeAccount />} />
          <Route path="/order" element={<Order />} />
          </Route>
          <Route path="/user/:userId/verify/:tokens" element={<VerifyEmail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notverified" element={<NotVerified />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword/:userId/:tokens" element={<ResetPassword />} />
          <Route path="/resetPassword/email" element={<PasswordEmail />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;

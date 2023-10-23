import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cancel from "./Cancel";
import Cart from "./Cart";
import ChangePasword from "./ChangePasword";
import Chekout from "./Checkout";
import Log from "./component/Auth/Log";
import SignIn from "./component/Auth/SignIn";
import Contact from "./Contact";
import Detail from "./Detail";
import Favorite from "./Favorite";
import Home from "./Home";
import HomeAccount from "./HomeAccount";
import Order from "./Order";
import Products from "./Products";
import Profile from "./Profile";
import Shop from "./Shop";
import Context from "./ShopContext/Shopcontext";
import ShopDetails from "./ShopDetails";
import Sucess from "./Sucess";


function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/setting" element={<ChangePasword />} />
          <Route path="/sucess" element={<Sucess />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/log" element={<Log />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shopdetails" element={<ShopDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Chekout />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/account" element={<HomeAccount />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;

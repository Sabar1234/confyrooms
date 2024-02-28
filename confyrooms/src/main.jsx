import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Listform from "./components/Listform.jsx";
import Signinform from "./components/Signinform.jsx";
import BuyNow from "./components/BuyNow.jsx";
import Otp from "./components/Otp.jsx";
import store from "./redux/store/user.js";
import { Provider } from "react-redux";
import AddProduct from "./components/AddProduct.jsx";
import Contact from "./components/Contact.jsx";
import Admin from "./components/Admin.jsx";
import Error from "./components/404page.jsx";
import SingleProduct from "./components/singleProduct.jsx";
import PriceUpdateModal from "./components/PriceUpdateModal.jsx";
import DeleteProduct from "./components/DeleteProduct.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/signup" element={<Listform />} />
            <Route path="/otp" element={<Otp />} />
            <Route path="/login" element={<Signinform />} />
            <Route path="/buyNow" element={<BuyNow />} />
            <Route path="/addProperty" element={<AddProduct />} />
            <Route path="/details/:id" element={<SingleProduct />} />
            <Route path="/*" element={<Error />} />
          </Route>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/update/:id" element={<PriceUpdateModal />} />
          <Route path="/delete-property/:id" element={<DeleteProduct />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

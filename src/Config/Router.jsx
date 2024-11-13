import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Components/ProductDetails";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product-details/:id" element={<ProductDetails />}></Route>


      </Routes>
    </div>
  );
}

export default Router;

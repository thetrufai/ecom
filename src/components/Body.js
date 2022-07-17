import React from "react";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";


function Body() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route Path="/product/:id" element={<ProductScreen/>}></Route>
        <Route Path="/" element={<HomeScreen/>} exact></Route>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default Body;

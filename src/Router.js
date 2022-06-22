import React from "react";
//import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";


const Router = () => (
    <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" element={
                    <HomePage />
                } />

                <Route path="/product/:productId" element={
                    <ProductPage>

                    </ProductPage>
                } />

                <Route path="/cart" element={
                    <CartPage>

                    </CartPage>
                } />
            </Routes>
        </App>
    </BrowserRouter>
);




export default Router;

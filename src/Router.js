import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";


const Router = () => (
    <BrowserRouter>
        <App>
            <Routes>
                <Route path="venia" element={<HomePage />} />

                <Route path="/product/:productId" element={<ProductPage />} />

                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </App>
    </BrowserRouter>
);

export default Router;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import PageNotFound from './components/PageNotFound/PageNotFound';



const Router = () => (
    <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" element={<Navigate to="venia" />} />
                <Route path="venia" element={<HomePage />} />

                <Route path="/product/:productId" element={<ProductPage />} />

                <Route path="/cart" element={<CartPage />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </App>
    </BrowserRouter>
);

export default Router;

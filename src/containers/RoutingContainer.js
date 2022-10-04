import React from "react";
import AuthComponent from "../components/Auth/AuthComponent";
import DashboardComponent from "../components/DashboardComponent";
import Product from "../views/Product";
import ProductList from "../views/ProductList";
import MainLayout from "../views/layouts/MainLayout";
import Missing from "../views/layouts/Missing";
import RequireAuth from "../components/RequireAuth";
import { Route, Routes } from "react-router";


const RoutingContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                {/** public routes */}
                <Route path="login" element={<AuthComponent/>} />
                {/** authentication routes */}
                <Route element={<RequireAuth/>}>
                    <Route path="/" element={<DashboardComponent/>} />
                    <Route path="/products" element={<Product/>} />
                    <Route path="/product-details" element={<ProductList/>}/>
                </Route>
                {/** catch all routes */}
                <Route path="*" element={<Missing/>}/>
            </Route>
        </Routes>
    )
}

export default RoutingContainer
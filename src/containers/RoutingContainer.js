import React from "react";
import AuthComponent from "../components/Auth/AuthComponent";
import DashboardComponent from "../components/DashboardComponent";
// import Product from "../views/Product";
import ProductList from "../views/ProductList";
import MainLayout from "../views/layouts/MainLayout";
import Missing from "../views/layouts/Missing";
import RequireAuth from "../components/RequireAuth";
import Basic from "../views/Basic";
import { Route, Routes } from "react-router";
const Product = React.lazy(() => import('../views/Product'));

const RoutingContainer = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                {/** public routes */}
                <Route path="login" element={<AuthComponent/>} />
                {/** authentication routes */}
                <Route element={<RequireAuth/>}>
                    <Route path="/" element={<DashboardComponent/>} />
                    <Route path="/products" element={
                        <React.Suspense fallback={<>...</>}>
                            <Product />
                        </React.Suspense>
                    } />
                    {/* <Route path="/product-details" element={<Basic/>}/> */}
                </Route>
                {/** catch all routes */}
                <Route path="*" element={<Missing/>}/>
            </Route>
        </Routes>
    )
}

export default RoutingContainer
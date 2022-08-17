import React from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import {ProductsList} from "./pages/products-list";
import {ProductPage} from "./pages/product-page";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./entities/Navigation";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<Navigate to="/products"/>}></Route>

                    <Route path="/products" element={<ProductsList/>}>
                    </Route>
                    <Route path="/products/:id" element={<ProductPage/>}/>

                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Provider>
        </>
    )
}

export default App;

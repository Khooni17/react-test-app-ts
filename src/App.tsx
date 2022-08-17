import React from "react";
import {Route, Routes} from 'react-router-dom';
import {ProductsPage} from "./pages/ProductsPage";
import {AboutPage} from "./pages/AboutPage";
import {Navigation} from "./components/Navigation";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <>
            <Provider store={store}>
                <Navigation/>
                <Routes>
                    <Route path="/" element={<ProductsPage/>}/>
                    <Route path="/about" element={<AboutPage/>}/>
                </Routes>
            </Provider>/
        </>

    )
}

export default App;

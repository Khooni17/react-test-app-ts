import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => (
    <nav className="h-[50px] flex justify-between px-5 items-center bg-gray-500 text-white">
        <span className="font-bold">Menu</span>

        <span>
            <Link className="mr-2" to="/">Products</Link>
            <Link to="/about">About</Link>
        </span>
    </nav>
);

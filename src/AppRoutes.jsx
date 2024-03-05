import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NewP from "./NewP";

export default function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/new" element={<NewP />} />
            </Routes>
        </BrowserRouter>
    )
}
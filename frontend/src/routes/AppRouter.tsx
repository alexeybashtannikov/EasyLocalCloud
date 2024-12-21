import React from "react";
import {Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivatePage from "../pages/PrivatePage.tsx";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivatePage />}>
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
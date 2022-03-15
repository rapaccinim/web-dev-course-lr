import {Route, Routes} from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact/contact";
import React from "react";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )

}
export default AppRoutes;
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import ChangePictures from "./pages/ChangePictures";
import CityMonuments from "./pages/CityMonuments";
import Home from "./pages/Home";
import Market from "./pages/Market";
import SlideShow from "./pages/SlideShow";
import Test from "./pages/Test";

const Router = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/slideshow" element={<SlideShow />} />
                <Route path="/test" element={<Test />} />
                <Route path="/city" element={<CityMonuments />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/market" element={<Market />} />
                <Route path="/change" element={<ChangePictures />} />

            </Routes>
        </HashRouter>
    )
}

export default Router;
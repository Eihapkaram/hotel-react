import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import loaderLogo from "./assets/KAAL.svg";
import AboutUs from "./Veiwes/AboutUs";
import Products from "./Veiwes/Products";
import Orders from "./Veiwes/FixeingOrders";
import Intersted from "./Veiwes/IntrestedPage";
import SinglePro from "./Veiwes/SingelPro";
import Login from "./Veiwes/Login";

import Dashboard from "./Veiwes/Dashboard";
// Lazy Loading
const NavBar = lazy(() => import("/src/components/NavBar"));
const Footer = lazy(() => import("/src/components/FooterCom"));
const Cart = lazy(() => import("./Veiwes/Cart"));
const Home = lazy(() => import("./Veiwes/HomePage"));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Navbar Lazy Loaded */}
      <Suspense>
        <NavBar />
      </Suspense>

      {/* Routes Lazy Loaded */}
      <Suspense
        fallback={
          <img
            style={{ position: "relative", top: "300px" }}
            width={"300px"}
            src={loaderLogo}
            className="Apploader"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/intersted" element={<Intersted />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unite/:id" element={<SinglePro />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

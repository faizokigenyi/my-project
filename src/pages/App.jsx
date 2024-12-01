import { useContext, useEffect } from "react";
import { useState } from "react";
import Product from "../components/Product";
import { ProductContext } from "../contexts/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Home from "./Home";
import ProductDetails from "./ProductDetails";
import Hero from "../components/Hero";
function App() {
  const { data, loading, error } = useContext(ProductContext);
  return (
    <div className="overflow-hidden bg-[rgb(248,248,248)] min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
        <SideBar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/Navigation";
import { Product } from "./pages/product/Product";
import { Contact } from "./pages/contact/Contact";
import { Footer } from "./layouts/Footer";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product/>}/>
        <Route path = "/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
};

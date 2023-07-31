
import React, { useState } from "react";
import skull from "../../../assets/images/skull.jpg";
import crust from "../../../assets/images/crust.jpg";
import shirt1 from "../../../assets/images/shirt1.jpg";
import shirt2 from "../../../assets/images/shirt2.jpg";
import shirt3 from "../../../assets/images/shirt3.jpg";
import "./ourproducts.scss";
 export const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("shirts");
   const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
   const products = {
    pants: [
      { name: "crust", price: 10, src: crust },
      { name: "skull", price: 15, src: skull }
    ],
    shirts: [
      { name: "shirt1", price: 20, src: shirt1 },
      { name: "shirt2", price: 25, src: shirt2 },
      { name: "shirt3", price: 30, src: shirt3 }
    ],
    accessories: []
  };
   return (
    <div className="our-products">
    <ul className="nav nav-tabs">
      {Object.keys(products).map((tabId) => (
        <li
          key={tabId}
          className={`nav-item ${activeTab === tabId ? "active" : ""}`}
        >
          <button
            className="nav-link"
            onClick={() => handleTabClick(tabId)}
          >
            {tabId}
          </button>
        </li>
      ))}
    </ul>
    <div className="tab-content d-flex justify-content-evenly">
      {products[activeTab].map((product) => (
        <div key={product.name} className="product w-25 d-flex flex-column align-items-center">
          <img src={product.src} alt={product.name} className="product-img" />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{`$${product.price}`}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

   
 }
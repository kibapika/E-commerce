import React from "react";
import { Link } from "react-router-dom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import EastIcon from "@mui/icons-material/East";
import "./mainContent.css";

const MainContent = () => {
  return (
    <div id="mainContent">
      <section id="sectionA">
        <div id="sectionAText">
          <h1 id="text1">Back In Stock</h1>
          <h2 id="text2">Get them while you can!</h2>
          <Link id="sectionABtn" to="/products">
            <div id="textABtn">
              <span>Shop Now</span>
              <EastIcon id="aBtnArrow" />
            </div>
          </Link>
        </div>
      </section>
      <section id="sectionB">
        <Link id="bBtn1" to="/products">
          Shoes
          <div id="hide1">Shop Shoes</div>
        </Link>
        <Link id="bBtn2" to="/products">
          Clothing
          <div id="hide2">Shop Clothing</div>
        </Link>
        <Link id="bBtn3" to="/products">
          Best Sellers
          <div id="hide3">Shop Best Sellers</div>
        </Link>
        <Link id="bBtn4" to="/products">
          New Arrivals
          <div id="hide4">Shop New Arrivals</div>
        </Link>
      </section>
      <section></section>
    </div>
  );
};

export default MainContent;

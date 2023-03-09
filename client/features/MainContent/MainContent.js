import React from "react";
import { Link } from "react-router-dom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import EastIcon from '@mui/icons-material/East';
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
              <EastIcon id="aBtnArrow"/>
            </div>
          </Link>
        </div>
      </section>
      <section>
        <Link to="/products">
          <button className="filterBtns" type="button">
            Shoes
          </button>
        </Link>
      </section>
    </div>
  );
};

export default MainContent;

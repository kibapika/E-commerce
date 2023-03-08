import React from "react";
import { Link } from "react-router-dom";
import homePic from "../../../public/pictures/home.jpg";
import "./mainContent.css";

const MainContent = () => {
  return (
    <div id="mainContent">
      <section id="sectionA">
        <div>
          <h1>Back In Stock</h1>
          <h2>Get them while you can!</h2>
          <Link to="/products">
            <button type="button">Shop Now</button>
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
      {/* <img id="homePic" src={homePic} /> */}
    </div>
  );
};

export default MainContent;

import React from "react";
import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok, FaGithub } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <section id="infoSec">
        <div id="innerInfoSec">
          <div className="divLinks">
            <h1>Shop</h1>
            <div className="links">
              <Link>Shoes</Link>
              <Link>Clothing</Link>
              <Link>Best Sellers</Link>
              <Link>New Arrivals</Link>
            </div>
          </div>
          <div className="divLinks">
            <h1>About Soles</h1>
            <div className="links">
              <Link>Our Story</Link>
              <Link>Careers</Link>
              <Link>Purpose</Link>
              <Link>Sustainability</Link>
              <Link>Reviews</Link>
            </div>
          </div>
          <div className="divLinks">
            <h1>Support</h1>
            <div className="links">
              <Link>Contact Us</Link>
              <Link>FAQs</Link>
              <Link>Shipping and Delivery</Link>
              <Link>Returns</Link>
            </div>
          </div>
        </div>
        <div>
          <Link><AiFillTwitterCircle /></Link>
          <Link><BsFacebook /></Link>
          <Link><BsInstagram /></Link>
          <Link><BsYoutube /></Link>
          <Link><FaTiktok /></Link>
          <Link><FaGithub /></Link>
        </div>
      </section>
      <section>
        <h1>© 2023 Soles, Inc.</h1>
        <a href="https://github.com/kibapika/Soles---Ecommerce">Soles -- GitHub</a>
      </section>
    </div>
  );
};

export default Footer;

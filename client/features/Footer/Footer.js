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
            <h1 className="title">Shop</h1>
            <div className="links">
              <Link className="linksTitle">Shoes</Link>
              <Link className="linksTitle">Clothing</Link>
              <Link className="linksTitle">Best Sellers</Link>
              <Link className="linksTitle">New Arrivals</Link>
            </div>
          </div>
          <div className="divLinks">
            <h1 className="title">About</h1>
            <div className="links">
              <Link className="linksTitle">Our Story</Link>
              <Link className="linksTitle">Careers</Link>
              <Link className="linksTitle">Purpose</Link>
              <Link className="linksTitle">Sustainability</Link>
              <Link className="linksTitle">Reviews</Link>
            </div>
          </div>
          <div className="divLinks">
            <h1 className="title">Support</h1>
            <div className="links">
              <Link className="linksTitle">Contact Us</Link>
              <Link className="linksTitle">FAQs</Link>
              <Link className="linksTitle">Shipping and Delivery</Link>
              <Link className="linksTitle">Returns</Link>
            </div>
          </div>
        </div>
        <div>
          <Link>
            <AiFillTwitterCircle className="icons"/>
          </Link>
          <Link>
            <BsFacebook className="icons"/>
          </Link>
          <Link>
            <BsInstagram className="icons"/>
          </Link>
          <Link>
            <BsYoutube className="icons"/>
          </Link>
          <Link>
            <FaTiktok className="icons"/>
          </Link>
          <a href="https://github.com/kibapika/Soles---Ecommerce">
            <FaGithub className="icons"/>
          </a>
        </div>
      </section>
      <section id="btmLinks">
        <h1 id="inc">© 2023 Soles, Inc.</h1>
        <a id="gitHub" href="https://github.com/kibapika/Soles---Ecommerce">
          Soles -- GitHub
        </a>
      </section>
    </div>
  );
};

export default Footer;

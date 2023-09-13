import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="f-container innerWidth paddings flexCenter">
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="" width={120} />
          <span className="secondaryText">
          All trademarks, logos and names are properties of their respective owners. 
            <br /> All Rights Reserved. &copy; Copyright 2023 Homyz Realty Services Limited.
          </span>
        </div>
        <div className="f-right flexColStart">
          <span className="primaryText">Information</span>
          <span className="secondaryText">143 XXX, Ch 600044,india</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Servicrs</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
